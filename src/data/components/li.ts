import parseChildren from '../../utils/parseChildren'

export function ListItem(...args: Arguments): ComponentReference {
  return {
    type: 'ListItemComponent',
    props: {
      children: parseChildren(args),
    },
  }
}

const ListItemComponent: Component = {
  name: 'ListItemComponent',
  content: {
    name: 'ListItemComponent',
    type: 'Li',
    source: 'teleport-elements-core',
    children: '$props.children',
  },
}

export default ListItemComponent
