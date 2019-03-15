export function FinalFooter(children: Children | ComponentReference): ComponentReference {
  return {
    type: 'FinalFooter',
    props: {
      children,
    },
  }
}

const FinalFooterComponent: Component = {
  name: 'FinalFooter',
  content: {
    name: 'FinalFooter',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#f7f7f7',
      padding: '10px 10px 10px',
      fontSize: '0.7em',
      color: '#323232',
      '@media (max-width: 600px)': {
        flexDirection: 'column',
      },
    },
    children: '$props.children',
  },
}

export default FinalFooterComponent
