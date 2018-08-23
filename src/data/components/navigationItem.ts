import parseChildren from '../../utils/parseChildren'

export function NavigationItem(
  ...args: Arguments
) {
  return {
    type: 'NavigationItemComponent',
    props: {
      children: parseChildren(arguments)
    }
  }
}

export default {
  name: 'NavigationItemComponent',
  content: {
    name: 'NavigationItem',
    type: 'Text',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      padding: '0 10px',
      opacity: '0.4'
    }
  }  
}
