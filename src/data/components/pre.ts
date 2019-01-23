export function Pre(children: string) {
  return {
    type: 'PreComponent',
    props: {
      children,
    },
  }
}

const ParagraphComponent: Component = {
  name: 'PreComponent',
  content: {
    name: 'Pre',
    type: 'Pre',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      tabSize: '4',
      overflow: 'auto',
      padding: '20px',
      backgroundColor: '#F6F8FA',
      height: '200px',
    },
  },
}

export default ParagraphComponent
