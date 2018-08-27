import parseChildren from '../../utils/parseChildren'

export function Paragraph(
  ...args: Arguments
): ComponentReference {
  return {
    type: 'Paragraph',
    props: {
      children: parseChildren(arguments)
    }
  } 
}

const ParagraphComponent: Component = {
  name: 'Paragraph',
  content: { 
    name: 'Paragraph',
    type: 'p',
    source: 'teleport-elements-core',
    children: '$props.children',
  }
}

export default ParagraphComponent
