export function Copy(children: Children | ComponentReference): ComponentReference {
  return {
    type: 'Copy',
    props: {
      children,
    },
  }
}

const CopyComponent: Component = {
  name: 'Copy',
  content: {
    name: 'Copy',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#e9e9e9',
      color: '#363636',
      fontSize: '0.7em',
      textAlign: 'center',
      padding: '40px 0px 20px',
    },
    children: '$props.children',
  },
}

export default CopyComponent
