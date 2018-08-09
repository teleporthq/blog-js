import parseChildren from '../../utils/parseChildren'

export function Title2(
  ...args: Arguments
): ComponentReference {
  return {
    type: 'TitleComponent2',
    props: {
      children: parseChildren(arguments)
    }
  }
}

const TitleComponent2: Component = {
  name: 'TitleComponent2',
  content: {
    name: 'TitleComponent2',
    type: 'H2',
    source: 'teleport-elements-core',
    children: '$props.children'  
  }
}

export default TitleComponent2