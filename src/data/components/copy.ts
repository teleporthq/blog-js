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
      backgroundColor: '#e9e9e9',
      color: '#363636',
      fontSize: '0.7em',
      textAlign: 'center',
      padding: '10px 0',
    },
    children: '$props.children',
  },
}

export default CopyComponent
