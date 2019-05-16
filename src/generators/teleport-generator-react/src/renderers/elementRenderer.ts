import { PropsUtils } from '../utils'
import styleTransformers from '@teleporthq/teleport-lib-js/dist/transformers/styles'
const { jsstocss } = styleTransformers

export default class ElementRenderer {
  public static renderJSXElement(
    name: string,
    className: any,
    isRoot?: boolean,
    childrenJSX?: string,
    styles?: any,
    styleMaps?: any,
    props?: any
  ): string {
    const propsString = generatePropsString(props)
    const stylesString =
      isRoot && Object.keys(styles).length
        ? `<style jsx>{\`\n    ${jsstocss.stylesheet(styles).css}  \n\`}</style>`
        : ''

    const classNameString = className ? `className="${className}"` : ''
    const inlineStyleString = styleMaps ? generateInlineString(className, styleMaps) : ''

    /** if there are children, explicitly closing tags are needed, self closing oherwise */
    /** if it's the root node, need to render it's style jsx */
    return (childrenJSX && childrenJSX.length > 0) || isRoot
      ? `<${name} ${classNameString} ${propsString} ${inlineStyleString}>
          ${childrenJSX}
          ${isRoot ? stylesString : ''}
        </${name}>`
      : `<${name} ${classNameString} ${propsString} ${inlineStyleString}/>`
  }

  public static renderElement(name: string, className: any, children?: string, styleMaps?: any, props?: any): string {
    const propsString = generatePropsString(props)
    const classNameString = className ? `className={classes.${className}}` : ''

    const inlineStyleString = styleMaps ? generateInlineString(className, styleMaps) : ''
    // const inlineStyleString = styleMaps ? `style={${styleMaps}}` : ''

    /** if there are children, explicitly closing tags are needed, self closing oherwise */
    return children && children.length > 0
      ? `<${name} ${classNameString} ${propsString} ${inlineStyleString}>\n
          ${children}
        </${name}>`
      : `<${name} ${classNameString} ${propsString} ${inlineStyleString}/>`
  }
}

function generatePropsString(props: any = {}, stringify: boolean = false): any {
  const propsArray = Object.keys(props).map((propName) => {
    const propValue = PropsUtils.parseForProps(props[propName]) || '""'

    const value = stringify ? JSON.stringify(propValue) : propValue
    return `${propName}=${value}`
  })
  return propsArray.length ? ` ${propsArray.join(' ')}` : ''
}

function generateInlineString(classNames: any, styleMaps: any): string {
  const styles = styleMaps.map((styleMap) => {
    const isInClassNames = classNames && classNames.indexOf(styleMap.className) >= 0
    return isInClassNames ? styleMap.styleName : null
  })
  const filteredStyles = styles.filter((style) => style)
  if (!filteredStyles.length) {
    return ''
  }

  return filteredStyles.length === 1 ? `style={${filteredStyles[0]}}` : `style{[${filteredStyles.join(', ')}]}`
}
