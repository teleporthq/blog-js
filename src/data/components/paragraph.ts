import parseChildren from '../../utils/parseChildren'

export function Paragraph(
  ...args: Arguments
) {
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
    type: 'View', 
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      width: 'inherit',
      marginTop: '30px',
      fontSize: '21px', 
      lineHeight: '40px',
      '@media (max-width: 600px)': {
        fontSize: '14px', 
        lineHeight: '20px',
      }
    }
  } 
}

export default ParagraphComponent
