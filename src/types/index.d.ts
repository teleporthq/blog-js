interface Target {
  [key: string]: string | {}
}

interface Component {
  name: string
  content: Content
  targets?: {
    [key: string]: Target
  }
}

type Children = string | Array<Content | ComponentReference>

type ComponentReference =
  | {
      source?: 'components'
      type: string
      props?: {
        [key: string]: string | number | {}
      }
    }
  | string

interface Page {
  name: string
  url: string
  content: Content
  targets?: {
    [key: string]: Target
  }
}

type Arguments = (string | Content | ComponentReference | {})[]

interface Content {
  source: string
  type: string
  name: string
  style?: {
    [key: string]:
      | string
      | number
      | {
          [key: string]: string | number
        }
  }
  children?: Array<Content | ComponentReference> | string
  props?: {
    [key: string]: string | number | {}
  }
}

interface TeleportProject {
  targets?: {
    [key: string]: Target
  }
  components: {
    [key: string]: Component
  }
  pages: {
    [key: string]: Page
  }
}
