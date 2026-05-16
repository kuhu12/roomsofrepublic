import { useEffect, useRef, useState, useCallback } from 'react'
import * as d3 from 'd3'
import { voronoiTreemap } from 'd3-voronoi-treemap'
import rough from 'roughjs'
import constitutionData from './constitution_full_dataset.json'
import './Day1Chart.css'

interface HierarchyNode {
  name: string
  shortName?: string
  category?: string
  value?: number
  description?: string
  link?: string
  children?: HierarchyNode[]
}

// URL generation helpers for Constitution of India website
const PREAMBLE_URL = 'https://www.constitutionofindia.net/articles/preamble/'

const SCHEDULE_URLS: Record<number, string> = {
  1: 'https://www.constitutionofindia.net/schedules/i-the-states/',
  2: 'https://www.constitutionofindia.net/schedules/a-provisions-as-to-the-president-and-the-governors-of-states/',
  3: 'https://www.constitutionofindia.net/schedules/forms-of-oaths-or-affirmations/',
  4: 'https://www.constitutionofindia.net/schedules/allocation-of-seats-in-the-council-of-states/',
  5: 'https://www.constitutionofindia.net/schedules/fifth-schedule/',
  6: 'https://www.constitutionofindia.net/schedules/sixth-schedule/',
  7: 'https://www.constitutionofindia.net/schedules/list-i-union-list/',
  8: 'https://www.constitutionofindia.net/schedules/eighth-schedule/',
  9: 'https://www.constitutionofindia.net/schedules/ninth-schedule/',
  10: 'https://www.constitutionofindia.net/schedules/tenth-schedule/',
  11: 'https://www.constitutionofindia.net/schedules/eleventh-schedule/',
  12: 'https://www.constitutionofindia.net/schedules/twelfth-schedule/',
}

function getArticleUrl(articleNumber: string, title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
  return `https://www.constitutionofindia.net/articles/article-${articleNumber.toLowerCase()}-${slug}/`
}

// Function to create a rounded polygon path
function roundedPolygonPath(polygon: [number, number][], radius: number): string {
  if (polygon.length < 3) return ''

  const n = polygon.length
  const path: string[] = []

  for (let i = 0; i < n; i++) {
    const p0 = polygon[(i - 1 + n) % n]
    const p1 = polygon[i]
    const p2 = polygon[(i + 1) % n]

    const v0 = [p0[0] - p1[0], p0[1] - p1[1]]
    const v1 = [p2[0] - p1[0], p2[1] - p1[1]]

    const len0 = Math.sqrt(v0[0] * v0[0] + v0[1] * v0[1])
    const len1 = Math.sqrt(v1[0] * v1[0] + v1[1] * v1[1])

    const maxRadius = Math.min(len0, len1) / 2
    const r = Math.min(radius, maxRadius)

    const u0 = [v0[0] / len0, v0[1] / len0]
    const u1 = [v1[0] / len1, v1[1] / len1]

    const start: [number, number] = [p1[0] + u0[0] * r, p1[1] + u0[1] * r]
    const end: [number, number] = [p1[0] + u1[0] * r, p1[1] + u1[1] * r]

    if (i === 0) {
      path.push(`M ${start[0]},${start[1]}`)
    } else {
      path.push(`L ${start[0]},${start[1]}`)
    }

    path.push(`Q ${p1[0]},${p1[1]} ${end[0]},${end[1]}`)
  }

  path.push('Z')
  return path.join(' ')
}

// Shrink polygon toward its centroid for padding effect
function shrinkPolygon(polygon: [number, number][], padding: number): [number, number][] {
  const centroid = d3.polygonCentroid(polygon)
  return polygon.map((point) => {
    const dx = point[0] - centroid[0]
    const dy = point[1] - centroid[1]
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist === 0) return point
    const shrinkRatio = Math.max(0, (dist - padding) / dist)
    return [centroid[0] + dx * shrinkRatio, centroid[1] + dy * shrinkRatio] as [number, number]
  })
}

const Day1Chart = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [tooltip, setTooltip] = useState<{
    visible: boolean
    x: number
    y: number
    content: { title: string; words: number; description: string; category: string; partName: string; link: string }
  }>({
    visible: false,
    x: 0,
    y: 0,
    content: { title: '', words: 0, description: '', category: '', partName: '', link: '' },
  })

  // Accessibility state
  const [focusedCellIndex, setFocusedCellIndex] = useState(-1)
  const [isTooltipPinned, setIsTooltipPinned] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cellsRef = useRef<any>(null)
  const leavesRef = useRef<d3.HierarchyNode<HierarchyNode>[]>([])


  // Keyboard navigation handler
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!leavesRef.current.length) return

    const totalCells = leavesRef.current.length
    let newIndex = focusedCellIndex

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        newIndex = focusedCellIndex < totalCells - 1 ? focusedCellIndex + 1 : 0
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        newIndex = focusedCellIndex > 0 ? focusedCellIndex - 1 : totalCells - 1
        break
      case 'Home':
        e.preventDefault()
        newIndex = 0
        break
      case 'End':
        e.preventDefault()
        newIndex = totalCells - 1
        break
      case 'Escape':
        e.preventDefault()
        newIndex = -1
        setTooltip(prev => ({ ...prev, visible: false }))
        setIsTooltipPinned(false)
        // Clear hatches
        if (svgRef.current) {
          d3.select(svgRef.current).selectAll('.hatch-fill').remove()
        }
        break
      default:
        return
    }

    setFocusedCellIndex(newIndex)

    if (newIndex >= 0 && leavesRef.current[newIndex]) {
      const d = leavesRef.current[newIndex]
      const partName = d.parent?.data.shortName || d.parent?.data.name || ''
      setTooltip({
        visible: true,
        x: 0,
        y: 0,
        content: {
          title: d.data.name,
          words: d.value || 0,
          description: d.data.description || '',
          category: d.data.category || '',
          partName: partName,
          link: d.data.link || '',
        },
      })
    }
  }, [focusedCellIndex])

  // ResizeObserver to track container size
  useEffect(() => {
    if (!containerRef.current) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        setDimensions({ width, height })
      }
    })

    resizeObserver.observe(containerRef.current)

    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0 || dimensions.height === 0) return

    const width = dimensions.width
    const height = dimensions.height

    // Build hierarchical data with groups
    const hierarchyData: HierarchyNode = {
      name: 'Constitution of India',
      children: [
        // Preamble as its own group
        {
          name: 'Preamble',
          category: 'Preamble',
          children: [
            {
              name: 'Preamble',
              shortName: 'Preamble',
              category: 'Preamble',
              value: constitutionData.preamble.word_count,
              description: 'The introductory statement of the Constitution',
              link: PREAMBLE_URL,
            },
          ],
        },
        // Parts group with articles
        {
          name: 'Parts',
          category: 'Parts',
          children: constitutionData.parts.map((part) => ({
            name: part.part,
            shortName: `Part ${part.part_number}`,
            category: 'Parts',
            children: part.articles.map((article) => ({
              name: `Article ${article.article}: ${article.title}`,
              shortName: article.article,
              category: 'Parts',
              value: article.word_count,
              description: article.title,
              link: getArticleUrl(article.article, article.title),
            })),
          })),
        },
        // Schedules group
        {
          name: 'Schedules',
          category: 'Schedules',
          children: constitutionData.schedules.map((schedule) => ({
            name: `Schedule ${schedule.schedule_number}: ${schedule.title}`,
            shortName: `${schedule.schedule_number}`,
            category: 'Schedules',
            value: schedule.word_count,
            description: schedule.title,
            link: SCHEDULE_URLS[schedule.schedule_number] || '',
          })),
        },
      ],
    }

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove()

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .style('background-color', 'transparent')
      .on('mouseleave', () => {
        // Clear hatch when leaving the entire chart (unless pinned)
        setIsTooltipPinned((pinned) => {
          if (!pinned) {
            d3.select(svgRef.current).selectAll('.hatch-fill').remove()
            setTooltip((prev) => ({ ...prev, visible: false }))
          }
          return pinned
        })
      })

    // Create Rough.js instance for hatching effect
    const rc = rough.svg(svgRef.current)
    const hatchGroup = svg.append('g').attr('class', 'hatch-overlay')

    // Create hierarchy
    const hierarchy = d3
      .hierarchy(hierarchyData)
      .sum((d) => d.value || 0)
      .sort((a, b) => (b.value || 0) - (a.value || 0))

    // Define the clipping polygon (rectangle)
    const padding = 0
    const topPadding = 0  // Extra space for title
    const bottomPadding = 0  // Extra space for legend

    const clipPolygon: [number, number][] = [
      [padding, topPadding],
      [width - padding, topPadding],
      [width - padding, height - bottomPadding],
      [padding, height - bottomPadding],
    ]

    // Create voronoi treemap
    const voronoiTreemapInstance = voronoiTreemap<HierarchyNode>().clip(clipPolygon)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    voronoiTreemapInstance(hierarchy as any)

    const cornerRadius = 9

    // Padding by depth level
    const paddingByDepth: Record<number, number> = {
      1: 6,  // Categories (Preamble, Parts, Schedules)
      2: 4,  // Groups/Leaves (Part I, Part II, Schedule 1, etc.)
      3: 1.8,  // Leaves (Articles)
    }

    // Stroke width by depth level
    const strokeWidthByDepth: Record<number, number> = {
      1: 0,    // Outer frame (Categories) - strongest
      2: 2,    // Major group boundaries - medium
      3: 1,    // Inner article cells - thinnest
    }

    // Helper to apply padding toward an ancestor's centroid
    const applyPaddingTowardAncestor = (
      polygon: [number, number][],
      ancestorPolygon: [number, number][],
      padding: number
    ): [number, number][] => {
      if (padding <= 0 || polygon.length < 3) return polygon
      const ancestorCentroid = d3.polygonCentroid(ancestorPolygon)
      return polygon.map((point) => {
        const dx = point[0] - ancestorCentroid[0]
        const dy = point[1] - ancestorCentroid[1]
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist === 0) return point
        const newDist = Math.max(0, dist - padding)
        return [
          ancestorCentroid[0] + (dx / dist) * newDist,
          ancestorCentroid[1] + (dy / dist) * newDist,
        ] as [number, number]
      })
    }
   
    // Draw group outlines (depth 1 and 2) with hierarchical stroke weights
    const groupNodes = hierarchy.descendants().filter((d) => d.depth >= 1 && d.children)

    svg
      .append('g')
      .attr('class', 'group-outlines')
      .selectAll('path')
      .data(groupNodes)
      .join('path')
      .attr('d', (d) => {
        // @ts-expect-error - polygon is added by voronoiTreemap
        let resultPolygon = d.polygon as [number, number][]

        // Apply padding from ancestors
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let current: any = d.parent
        while (current && current.depth >= 1) {
          const ancestorPolygon = current.polygon as [number, number][]
          const padding = paddingByDepth[current.depth] || 0
          if (ancestorPolygon && padding > 0) {
            resultPolygon = applyPaddingTowardAncestor(resultPolygon, ancestorPolygon, padding)
          }
          current = current.parent
        }

        if (resultPolygon.length < 3) return ''
        return roundedPolygonPath(resultPolygon, cornerRadius)
      })
      .attr('fill', 'transparent')
      .attr('stroke', '#fff')
      .attr('stroke-width', (d) => strokeWidthByDepth[d.depth] || 1)
      .attr('opacity', 0.92)

    // Compute padded polygons for each leaf
    const computePaddedPolygon = (d: d3.HierarchyNode<HierarchyNode>): [number, number][] => {
      // @ts-expect-error - polygon is added by voronoiTreemap
      let resultPolygon = d.polygon as [number, number][]

      // Collect ancestors from depth 1 to leaf's parent
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ancestors: { node: any; depth: number }[] = []
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let current: any = d.parent
      while (current && current.depth >= 1) {
        ancestors.unshift({ node: current, depth: current.depth })
        current = current.parent
      }

      // Apply padding from each ancestor level
      for (const ancestor of ancestors) {
        const ancestorPolygon = ancestor.node.polygon as [number, number][]
        const padding = paddingByDepth[ancestor.depth] || 0
        if (ancestorPolygon && padding > 0) {
          resultPolygon = applyPaddingTowardAncestor(resultPolygon, ancestorPolygon, padding)
        }
      }

      // Apply leaf's own padding (shrink toward own centroid)
      const leafPadding = paddingByDepth[d.depth] || 0
      if (leafPadding > 0 && resultPolygon.length >= 3) {
        resultPolygon = shrinkPolygon(resultPolygon, leafPadding)
      }

      return resultPolygon
    }

    // Store padded polygons on each leaf
    hierarchy.leaves().forEach((d) => {
      // @ts-expect-error - adding paddedPolygon property
      d.paddedPolygon = computePaddedPolygon(d)
    })

    // Draw cells (leaves at various depths)
    const cells = svg
      .append('g')
      .attr('class', 'cells')
      .selectAll('path')
      .data(hierarchy.leaves())
      .join('path')
      .attr('d', (d) => {
        // @ts-expect-error - paddedPolygon is added above
        const resultPolygon = d.paddedPolygon as [number, number][]
        if (resultPolygon.length < 3) return ''
        return roundedPolygonPath(resultPolygon, cornerRadius)
      })
      .attr('fill', 'transparent')
      .attr('stroke', '#fff')
      .attr('stroke-width', (d) => strokeWidthByDepth[d.depth] || 1)
      .attr('opacity', 0)
      .style('pointer-events', 'all')
      .style('cursor', 'pointer')

    // Animate cells
    cells
      .transition()
      .duration(1200)
      // .delay((_, i) => i * 25)
      .attr('opacity', 0.92)

    // Helper to draw hatch for a cell
    const drawHatch = (d: d3.HierarchyNode<HierarchyNode>) => {
      // Clear any existing hatches first
      hatchGroup.selectAll('.hatch-fill').remove()

      // @ts-expect-error - paddedPolygon is added above
      const polygon = d.paddedPolygon as [number, number][]
      const hatchedPath = rc.polygon(polygon, {
        fill: 'rgba(255, 255, 255, 0.8)',
        fillStyle: 'hachure',
        hachureAngle: 45,
        hachureGap: 2,
        strokeWidth: 0.8,
        stroke: 'rgba(255, 255, 255, 0.8)',
        roughness: 1.5,
      })
      hatchGroup.node()?.appendChild(hatchedPath)
      d3.select(hatchedPath).attr('class', 'hatch-fill').style('pointer-events', 'none')
    }

    // Add hover and click effects
    cells
      .attr('data-name', (d) => d.data.name)
      .on('mouseenter', function (_, d) {
        const hoverStroke = (strokeWidthByDepth[d.depth] || 1) + 1
        d3.select(this)
          .transition()
          .duration(200)
          .attr('opacity', 1)
          .attr('stroke-width', hoverStroke)

        // Draw hatched fill
        drawHatch(d)

        // Hide the corresponding label
        svg.selectAll('.labels text')
          .filter((labelD: unknown) => (labelD as typeof d).data.name === d.data.name)
          .transition()
          .duration(200)
          .attr('opacity', 0)

        // Only update tooltip if not pinned
        setIsTooltipPinned((pinned) => {
          if (!pinned) {
            const partName = d.parent?.data.shortName || d.parent?.data.name || ''
            setTooltip({
              visible: true,
              x: 0,
              y: 0,
              content: {
                title: d.data.name,
                words: d.value || 0,
                description: d.data.description || '',
                category: d.data.category || '',
                partName: partName,
                link: d.data.link || '',
              },
            })
          }
          return pinned
        })
      })
      .on('mouseleave', function (_, d) {
        const normalStroke = strokeWidthByDepth[d.depth] || 1
        d3.select(this)
          .transition()
          .duration(200)
          .attr('opacity', 0.92)
          .attr('stroke-width', normalStroke)

        // Show the corresponding label again
        svg.selectAll('.labels text')
          .filter((labelD: unknown) => (labelD as typeof d).data.name === d.data.name)
          .transition()
          .duration(200)
          .attr('opacity', 1)

        // Only hide tooltip if not pinned (don't remove hatch here - drawHatch handles it)
        setIsTooltipPinned((pinned) => {
          if (!pinned) {
            setTooltip((prev) => ({ ...prev, visible: false }))
          }
          return pinned
        })
      })
      .on('click', function (_, d) {
        // Clear previous hatches and draw for clicked cell
        drawHatch(d)

        // Pin the tooltip on click
        const partName = d.parent?.data.shortName || d.parent?.data.name || ''

        setTooltip({
          visible: true,
          x: 0,
          y: 0,
          content: {
            title: d.data.name,
            words: d.value || 0,
            description: d.data.description || '',
            category: d.data.category || '',
            partName: partName,
            link: d.data.link || '',
          },
        })
        setIsTooltipPinned(true)
      })

    // Store leaves reference for keyboard navigation
    const leaves = hierarchy.leaves()
    leavesRef.current = leaves

    // Add labels
    const areas = leaves.map((d) => {
      // @ts-expect-error - polygon is added by voronoiTreemap
      const polygon = d.polygon as [number, number][]
      return Math.abs(d3.polygonArea(polygon))
    })
    const fontSizeScale = d3.scaleSqrt()
      .domain([d3.min(areas) || 0, d3.max(areas) || 1])
      .range([12, 30])

    svg
      .append('g')
      .attr('class', 'labels')
      .selectAll('text')
      .data(leaves)
      .join('text')
      .attr('text-anchor', 'middle')
      // @ts-expect-error - polygon.site is added by voronoiTreemap
      .attr('transform', (d) => `translate(${d.polygon.site.x}, ${d.polygon.site.y})`)
      .style('pointer-events', 'none')
      .attr('font-size', (d) => {
        // @ts-expect-error - polygon is added by voronoiTreemap
        const polygon = d.polygon as [number, number][]
        const area = Math.abs(d3.polygonArea(polygon))
        return fontSizeScale(area) + 'px'
      })
      .attr('font-family', 'Inter, sans-serif')
      .attr('font-weight', '200')
      .attr('fill', '#fff')
      .attr('opacity', 0)
      .style('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
      .text((d) => {
        // @ts-expect-error - polygon is added by voronoiTreemap
        const polygon = d.polygon as [number, number][]
        const area = Math.abs(d3.polygonArea(polygon))
        if(d.data.shortName === 'Preamble') return ''
        if (area < 2200) return ''
        return d.data.shortName || ''
      })
      .transition()
      .duration(600)
      .attr('opacity', 1)

    // Store cells reference
    cellsRef.current = cells
  }, [dimensions])

  // Effect to handle keyboard focus visual state
  useEffect(() => {
    if (!svgRef.current || !cellsRef.current) return

    const svg = d3.select(svgRef.current)

    // Reset all cells to default state
    svg.selectAll('.cells path')
      .attr('stroke-width', 1)
      .classed('focused', false)

    // Apply focus state to focused cell
    if (focusedCellIndex >= 0 && leavesRef.current[focusedCellIndex]) {
      const focusedLeaf = leavesRef.current[focusedCellIndex]
      svg.selectAll('.cells path')
        .filter((d) => d === focusedLeaf)
        .attr('stroke-width', 3)
        .classed('focused', true)
    }
  }, [focusedCellIndex])

  return (
    <div className="day1-container">
      {/* Skip Link for keyboard users */}
      <a href="#data-table" className="skip-link">
        Skip to data table
      </a>

      {/* Header: Title + Info Panel */}
      <div className="day1-header">
        <div className="day1-title-block">
          <p className="day1-label">Constitution of India</p>
          <h1 className="day1-title">The Rooms of<br />the Republic</h1>
          <p className="day1-subtitle">
            The world's longest sovereign constitution, rendered clause by clause, with each cell scaled by word count.
          </p>
          <div className="day1-stats">
            <div className="day1-stat">
              <span className="day1-stat-label">Words</span>
              <span className="day1-stat-value">146,385</span>
            </div>
            <div className="day1-stat">
              <span className="day1-stat-label">Parts</span>
              <span className="day1-stat-value">25</span>
            </div>
            <div className="day1-stat">
              <span className="day1-stat-label">Articles</span>
              <span className="day1-stat-value">470</span>
            </div>
            <div className="day1-stat">
              <span className="day1-stat-label">Schedules</span>
              <span className="day1-stat-value">12</span>
            </div>
          </div>
          {/* Keyboard instructions */}
          <p className="day1-keyboard-hint">
            Click a cell to pin the tooltip. Press Escape to clear.
          </p>
        </div>

        {/* Info Panel with ARIA live region */}
        <div
          className="day1-info-panel"
          role="region"
          aria-label="Selected article details"
          aria-live="polite"
          aria-atomic="true"
        >
          {tooltip.visible ? (
            <div className={`day1-info-content ${isTooltipPinned ? 'pinned' : ''}`}>
              {isTooltipPinned && (
                <button
                  className="day1-info-close"
                  onClick={() => {
                    setIsTooltipPinned(false)
                    setTooltip(prev => ({ ...prev, visible: false }))
                    // Clear hatches
                    if (svgRef.current) {
                      d3.select(svgRef.current).selectAll('.hatch-fill').remove()
                    }
                  }}
                  aria-label="Close tooltip"
                >
                  &times;
                </button>
              )}
              <div className="day1-info-category">
                {tooltip.content.category.toUpperCase()}
                {tooltip.content.partName &&
                 tooltip.content.partName.toUpperCase() !== tooltip.content.category.toUpperCase() && (
                  <> &middot; {tooltip.content.partName.toUpperCase()}</>
                )}
                {tooltip.content.title.includes(':') && (
                  <> &middot; {tooltip.content.title.split(':')[0].toUpperCase()}</>
                )}
              </div>
              <div className="day1-info-title">
                {tooltip.content.title.includes(':')
                  ? tooltip.content.title.split(':').slice(1).join(':').trim()
                  : tooltip.content.title}
              </div>
              <div className="day1-info-stats">
                <div className="day1-info-stat">
                  <span className="day1-info-stat-label">Words</span>
                  <span className="day1-info-stat-value">{tooltip.content.words.toLocaleString()}</span>
                </div>
                <div className="day1-info-stat">
                  <span className="day1-info-stat-label">% of Total</span>
                  <span className="day1-info-stat-value">{((tooltip.content.words / 146385) * 100).toFixed(1)}%</span>
                </div>
              </div>
              <div className="day1-info-description">{tooltip.content.description}</div>
              {tooltip.content.link && (
                <a
                  href={tooltip.content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="day1-info-link"
                >
                  Read Full Text &rarr;
                </a>
              )}
              {/* Screen reader only: full text announcement */}
              <span className="sr-only">
                {tooltip.content.title}, {tooltip.content.words.toLocaleString()} words,
                {((tooltip.content.words / 146385) * 100).toFixed(1)} percent of total constitution.
                {tooltip.content.description}
              </span>
            </div>
          ) : (
            <div className="day1-info-panel-empty">Hover a cell &rarr;</div>
          )}
        </div>
      </div>

      {/* Chart Container with keyboard support */}
      <div
        className="day1-chart-container"
        ref={containerRef}
        tabIndex={0}
        role="application"
        aria-label="Interactive treemap of the Constitution of India. Use arrow keys to navigate between articles."
        aria-describedby="chart-description"
        onKeyDown={handleKeyDown}
      >
        <span id="chart-description" className="sr-only">
          Voronoi treemap visualization showing all 470 articles of the Indian Constitution.
          Each cell represents an article, sized by word count.
          Navigate with arrow keys, press Escape to clear selection.
        </span>
        <svg
          ref={svgRef}
          role="img"
          aria-label="Constitution of India treemap showing 470 articles across 25 parts and 12 schedules, with cell sizes representing word count"
        ></svg>
      </div>

      {/* Data Table Section */}
      {/* <section id="data-table" className="day1-table-section" aria-labelledby="table-heading">
        <div className="day1-table-header">
          <h2 id="table-heading">Constitution Data Table</h2>
          <button
            className="day1-table-toggle"
            onClick={() => setIsTableVisible(!isTableVisible)}
            aria-expanded={isTableVisible}
            aria-controls="constitution-table"
          >
            {isTableVisible ? 'Hide Table' : 'Show Table'}
          </button>
        </div>

        {isTableVisible && (
          <div className="day1-table-wrapper" id="constitution-table">
            <table className="day1-data-table" aria-label="Constitution of India articles data">
              <thead>
                <tr>
                  <th scope="col">Part</th>
                  <th scope="col">Section</th>
                  <th scope="col">Article</th>
                  <th scope="col">Title</th>
                  <th scope="col">Words</th>
                  <th scope="col">% of Total</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.category}</td>
                    <td>{row.partNumber}</td>
                    <td>{row.article}</td>
                    <td>{row.title}</td>
                    <td>{row.words.toLocaleString()}</td>
                    <td>{((row.words / 146385) * 100).toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section> */}
    </div>
  )
}

export default Day1Chart
