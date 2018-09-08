export function NavigationItem(children: Children | ComponentReference): ComponentReference {
  return {
    type: 'NavigationItemComponent',
    props: {
      children,
    },
  }
}

const NavigationItemComponent: Component = {
  name: 'NavigationItemComponent',
  content: {
    name: 'NavigationItem',
    type: 'Text',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      padding: '0 15px',
      color: '#aeaeae',
      whiteSpace: 'nowrap'
      '@media (max-width: 600px)': {
        padding: '0 8px',
      },
    },
  },
}

export default NavigationItemComponent
