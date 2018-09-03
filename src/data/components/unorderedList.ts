import parseChildren from '../../utils/parseChildren'

export function UnorderedList(...args: Arguments): ComponentReference {
  return {
    type: 'UnorderedListComponent',
    props: {
      children: parseChildren(arguments),
    },
  }
}

const UnorderedListComponent: Component = {
  name: 'UnorderedListComponent',
  content: {
    name: 'UnorderedListComponent',
    type: 'Ul',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      marginTop: '30px',
    },
  },
}

export default UnorderedListComponent
