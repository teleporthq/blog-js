export function InfoText(children: Children | ComponentReference): ComponentReference {
  return {
    type: 'InfoText',
    props: {
      children,
    },
  }
}

const CopyComponent: Component = {
  name: 'InfoText',
  content: {
    name: 'InfoText',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      maxWidth: '490px',
      margin: '40px auto 0',
      textAlign: 'center',
      fontSize: '0.8em',
      padding: '15px',
      borderRadius: '3px',
      borderTop: '1px solid #eee',
    },
    children: '$props.children',
  },
}

export default CopyComponent
