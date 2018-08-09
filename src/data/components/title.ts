import parseChildren from '../../utils/parseChildren'

export function Title(
  ...args: Arguments
): ComponentReference {
  return {
    type: 'TitleComponent',
    props: {
      children: parseChildren(arguments)
    }
  }
}

const TitleComponent: Component = {
  name: 'TitleComponent',
  content: {
    name: 'TitleComponent',
    type: 'H1',
    source: 'teleport-elements-core',
    children: '$props.children'  
  }
}

export default TitleComponent