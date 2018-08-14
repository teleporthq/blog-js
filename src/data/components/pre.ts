import parseChildren from '../../utils/parseChildren'

export function Pre(
  ...args: Arguments
) {
  return {
    type: 'PreComponent',
    props: {
      children: parseChildren(arguments)
    }
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
      padding: '20px',
      fontSize: '16px',
      backgroundColor: '#F6F8FA',
      fontFamily: 'Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif'
    }
  } 
}

export default ParagraphComponent
