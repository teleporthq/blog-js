import parseChildren from '../../utils/parseChildren'

export function Header(...args: Arguments): ComponentReference {
  return {
    type: 'HeaderComponent',
    props: {
      children: parseChildren(arguments),
    },
  }
}

const HeaderComponent: Component = {
  name: 'HeaderComponent',
  content: {
    name: 'HeaderComponent',
    type: 'View',
    source: 'teleport-elements-core',
    children: [
      {
        name: 'Header',
        type: 'View',
        source: 'teleport-elements-core',
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '15px 5px 60px 20px',
          '@media (max-width: 700px)': {
            flexDirection: 'column',
            textAlign: 'center',
            margin: '15px 20px 40px',
          },
        },
        children: '$props.children',
      },
    ],
  },
}

export default HeaderComponent
