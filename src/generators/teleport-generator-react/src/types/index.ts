import { Target } from '@teleporthq/teleport-lib-js'

export interface JSXMetadata {
  isRoot?: boolean
  styles?: any
  inlineStyle?: string
}

export interface RendererMetadata {
  content: any
  target: Target
  styleMaps: any
  isRoot?: boolean
  styles?: any
}
