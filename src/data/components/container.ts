import parseChildren from '../../utils/parseChildren'

export function Container(...args: Arguments): ComponentReference {
  return {
    type: 'ContainerComponent',
    props: {
      children: parseChildren(arguments),
    },
  }
}

const ContainerComponent: Component = {
  name: 'ContainerComponent',
  content: {
    name: 'ContainerComponent',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      display: 'flex',
      alignItems: 'center',
      margin: '0px 100px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    children: '$props.children',
  },
}

export default ContainerComponent
