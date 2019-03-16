export function Footer(children: Children | ComponentReference): ComponentReference {
  return {
    type: 'Footer',
    props: {
      children,
    },
  }
}

const FooterComponent: Component = {
  name: 'Footer',
  content: {
    name: 'FooterMain',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#f7f7f7',
      margin: '30px 0 0',
      fontSize: '0.7em',
      color: '#323232',
      '@media (max-width: 600px)': {
        flexDirection: 'column',
        padding: '30px 0 20px',
      },
    },
    children: [
      {
        name: 'Footer',
        type: 'View',
        source: 'teleport-elements-core',
        style: {
          display: 'flex',
          justifyContent: 'space-around',
          padding: '40px 0px 40px',
          width: '100%',
          maxWidth: '800px',
          flexWrap: 'wrap',
        },
        children: '$props.children',
      },
    ],
  },
}

export default FooterComponent
