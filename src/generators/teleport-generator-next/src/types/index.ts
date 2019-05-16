export interface NextProjectGeneratorOptions {
  generateAllFiles?: boolean
  generateDocumentFile?: boolean
  generateConfigFile?: boolean
}

export interface HTMLAttributes {
  attributes: object | null | undefined
}

interface MetaAttributes extends HTMLAttributes {
  tagName: string
  innerString: string | null | undefined
}

interface Web {
  htmlTag: HTMLAttributes
  head: MetaAttributes[]
}

export interface PlatformOptions {
  [key: string]: Web
  web: Web
}
