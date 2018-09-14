import parseChildren from '../../utils/parseChildren'

export function Navigation(...args: Arguments): ComponentReference {
  return {
    type: 'NavigationComponent',
    props: {
      children: parseChildren(args),
    },
  }
}

const NavigationComponent: Component = {
  name: 'NavigationComponent',
  content: {
    name: 'NavigationComponent',
    type: 'View',
    source: 'teleport-elements-core',
    style: {},
    children: [
      {
        name: 'Navigation',
        type: 'View',
        source: 'teleport-elements-core',
        children: '$props.children',
        style: {
          textTransform: 'uppercase',
          fontWeight: '900',
          fontSize: '0.88rem',
          '@media (max-width: 700px)': {
            marginTop: '40px',
          },
        },
      },
    ],
  },
}

export default NavigationComponent
