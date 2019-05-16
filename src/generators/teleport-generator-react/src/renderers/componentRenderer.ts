import { Target } from '@teleporthq/teleport-lib-js'
import ElementRenderer from './elementRenderer'
import { PROPS_KEY, THIS_PROPS } from '../constants'
import { JSXMetadata, RendererMetadata } from '../types'

export default class ComponentRenderer {
  public static renderComponentJSX(metadata: RendererMetadata): any {
    const { content, styles, styleMaps, target } = metadata
    const isRoot = metadata.isRoot || false
    const jsxMetadata = { isRoot, styles }

    return renderComponent(content, target, styleMaps, jsxMetadata, true)
  }

  public static renderComponent(renderMetadata: RendererMetadata): any {
    const { content, target, styleMaps } = renderMetadata
    const jsxMetadata = { isRoot: false, styles: null }
    return renderComponent(content, target, styleMaps, jsxMetadata)
  }
}

function renderComponent(
  content: any,
  target: Target,
  styleMaps: any,
  jsxMetadata?: JSXMetadata,
  isJSX: boolean = false
): string {
  const { isRoot, styles } = jsxMetadata
  const { source, type, ...props } = content

  /** retieve the target type from the lib */
  let mapping: any = null
  let mappedType: string = type

  /** if the source is not components, map it with the target's mappers */
  if (source !== 'components') {
    mapping = target.map(source, type)
    if (mapping) mappedType = mapping.type
  }

  const className = props.style || null
  delete props.style

  const children = props.children || null
  delete props.children

  /** calculate the children's jsx recursively */
  let childrenJSX = generateChildrenElements(children, target, styleMaps, jsxMetadata, isJSX)

  const { name, props: componentProps, ...otherProps } = props // this is to cover img uri props; aka static props
  const mappedProps = { ...componentProps, ...otherProps }

  if (mappedProps.children && Array.isArray(mappedProps.children)) {
    childrenJSX = mappedProps.children.map((child) => {
      const jsxMeta = { isRoot: false, styles }
      return renderComponent(child, target, styleMaps, jsxMeta, isJSX)
    })
    delete mappedProps.children
  }

  childrenJSX = Array.isArray(childrenJSX) ? childrenJSX.join('') : childrenJSX

  return isJSX
    ? ElementRenderer.renderJSXElement(mappedType, className, isRoot, childrenJSX, styles, styleMaps, mappedProps)
    : ElementRenderer.renderElement(mappedType, className, childrenJSX, styleMaps, mappedProps)
}

function generateChildrenElements(
  children: any,
  target: any,
  inlineStyle: string,
  jsxXMetadata?: JSXMetadata,
  isJSX: boolean = false
): any {
  if (!children || !children.length) {
    return []
  }

  const { styles } = jsxXMetadata
  if (typeof children === 'string') {
    /** if the children it's a string, it can contain a prop mapping */
    if (children.indexOf(PROPS_KEY) === 0) {
      /** if it does, replace the maing string with the prop's value */
      /** @TODO: might need to move this to libs-js */
      const propKey = children.replace(PROPS_KEY, '')
      return `{${THIS_PROPS}${propKey}}`
    }

    // override Html default behavior regarding left and right trimming
    children = children.indexOf(' ') === 0 ? `&nbsp;${children}` : children
    children = children.substr(children.length - 1) === ' ' ? `${children}&nbsp;` : children

    /** check for < and > and replace with their html entities otherwise */
    /** @TODO: treat all special characters */
    return children.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }

  /** recurse into children to calsulate their JSX */
  return children.map((child) => {
    const jsxMeta = { isRoot: false, styles }
    return renderComponent(child, target, inlineStyle, jsxMeta, isJSX)
  })
}
