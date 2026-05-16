declare module 'd3-voronoi-treemap' {
  import { HierarchyNode } from 'd3'

  export interface VoronoiTreemap<T> {
    (root: HierarchyNode<T>): void
    clip(polygon: [number, number][]): this
    extent(extent: [[number, number], [number, number]]): this
    size(size: [number, number]): this
    convergenceRatio(ratio: number): this
    maxIterationCount(count: number): this
    minWeightRatio(ratio: number): this
  }

  export function voronoiTreemap<T = unknown>(): VoronoiTreemap<T>
}
