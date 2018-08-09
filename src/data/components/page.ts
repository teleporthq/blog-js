import parseChildren from '../../utils/parseChildren'

export function Page(...args: Arguments): ComponentReference {
  return {
    type: 'PageComponent',
    props: {
      children: parseChildren(arguments)
    }
  }
}

const PageComponent: Component = {
  name: 'PageComponent',
  content: {
    name: 'PageComponent',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    children: '$props.children'
  }
}

export default PageComponent