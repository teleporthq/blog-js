export function NavigationItem(children: Children | ComponentReference, color: string = '#aeaeae'): ComponentReference {
  return {
    type: 'NavigationItemComponent',
    props: {
      children,
      color,
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
      padding: '5px 15px',
      color: '$props.color',
      display: 'inline-block',
      fontSize: '14px',
      lineHeight: '25px',
      '@media (max-width: 600px)': {
        padding: '10px',
      },
      '&:hover': {
        color: '#4a4a4a',
        transitionDuration: '0.3s',
      },
    },
  },
}

export default NavigationItemComponent
