export default class GeneralUtils {
  public static lowerFirst(inputString: string): string {
    if (typeof inputString !== 'string') {
      return inputString
    }

    return inputString.charAt(0).toLowerCase() + inputString.slice(1)
  }
}
