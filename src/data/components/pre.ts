import parseChildren from '../../utils/parseChildren'

export function Pre(...args: Arguments) {
  return {
    type: 'PreComponent',
    props: {
      children: parseChildren(args),
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
    },
  },
}

export default ParagraphComponent
