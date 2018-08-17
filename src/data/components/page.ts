import parseChildren from '../../utils/parseChildren'

export function Page(...args: Arguments): ComponentReference {
  return {
    type: 'Page',
    props: {
      children: parseChildren(arguments)
    }
  }
}

const PageComponent: Component = {
  name: 'Page',
  content: {
    name: 'Page',
    type: 'View',
    source: 'teleport-elements-core',
    children: '$props.children'
  }
}

export default PageComponent