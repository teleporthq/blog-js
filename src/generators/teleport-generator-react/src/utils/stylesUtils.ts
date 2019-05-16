import { PROPS_KEY, THIS_PROPS } from '../constants'
import { GeneralUtils } from './'

export default class StylesUtils {
  public static detectDynamicStyle(styles: any): any {
    const dynamicStyles = {}
    const staticStyles = {}

    Object.keys(styles).forEach((style) => {
      const { dynamicStyle, staticStyle } = extractDynamicPropsFromStyle(styles[style])
      if (Object.keys(dynamicStyle).length) {
        dynamicStyles[style] = dynamicStyle
      }
      if (Object.keys(staticStyle).length) {
        staticStyles[style] = staticStyle
      }
    })

    return { dynamicStyles, staticStyles }
  }

  public static generateInlineStyleForElement(elementName: string, style: any): any {
    if (!Object.keys(style).length) {
      return { styleMaps: null, styleString: '' }
    }

    const elementStyleName = `${GeneralUtils.lowerFirst(elementName)}Style`
    const styleMaps = []
    const elementStyles = Object.keys(style)
      .map((className) => {
        const styleName = `${GeneralUtils.lowerFirst(className)}Style`
        const styleValue = computeInlineStyleValueMap(style, className).join(',\n')
        styleMaps.push({ className, styleName: `${elementStyleName}.${styleName}` })
        return `${styleName}: { \n ${styleValue} \n }`
      })
      .join(',\n')

    const styleString = `const ${elementStyleName} = { \n ${elementStyles} \n }`
    return { styleMaps, styleString }
  }
}

function extractDynamicPropsFromStyle(style: any): any {
  const dynamicStyle = {}
  const staticStyle = {}

  Object.keys(style).forEach((styleKey) => {
    const stylePropIsDynamic = JSON.stringify(style[styleKey]).indexOf(PROPS_KEY) >= 0
    if (stylePropIsDynamic) {
      dynamicStyle[styleKey] = style[styleKey]
    } else {
      staticStyle[styleKey] = style[styleKey]
    }
  })
  return { dynamicStyle, staticStyle }
}

function computeInlineStyleValueMap(style: any, className: string): any {
  const classStyle = style[className]
  return Object.keys(classStyle).map((jssProp) => {
    return `${jssProp}: ${classStyle[jssProp].replace(PROPS_KEY, THIS_PROPS)}`
  })
}
