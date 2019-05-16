import { PROPS_KEY, THIS_PROPS } from '../constants'

export default class PropsUtils {
  public static parseForProps(content: any, isStyleObject?: boolean) {
    return parseForProps(content, isStyleObject)
  }
}

function parseForProps(content: any, isStyleObject?: boolean) {
  if (!content) return

  if (typeof content === 'string') {
    return content.indexOf(PROPS_KEY) === 0 ? `{${content.replace(PROPS_KEY, THIS_PROPS)}}` : `"${content}"`
  }

  Object.keys(content).forEach((value) => {
    if (typeof content[value] === 'string') {
      if (content[value].indexOf(PROPS_KEY) === 0) {
        content[value] = `\${${content[value].replace(PROPS_KEY, THIS_PROPS)}}`
      }
    } else {
      parseForProps(content[value])
    }
  })

  return isStyleObject ? content : `{${JSON.stringify(content)}}`
}
