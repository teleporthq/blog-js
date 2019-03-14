export function CopyText(children: Children | ComponentReference): ComponentReference {
  return {
    type: 'CopyText',
    props: {
      children,
    },
  }
}

const CopyTextComponent: Component = {
  name: 'CopyText',
  content: {
    name: 'CopyText',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      flex: 1,
      maxWidth: '800px',
    },
    children: '$props.children',
  },
}

export default CopyTextComponent
