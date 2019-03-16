import parseChildren from '../../utils/parseChildren'

export function Paragraph(...args: Arguments): ComponentReference {
  // default styles
  let style = {
    marginTop: '20px',
    marginBottom: '0',
    marginLeft: '0',
    marginRight: '0',
    color: '#333',
  }

  // if we detect style instructions, override defaults
  Array.from(arguments).forEach((element) => {
    if (element.style) {
      style = { ...style, ...element.style }
    }
  })

  return {
    type: 'Paragraph',
    props: {
      children: parseChildren(arguments),
      ...style,
    },
  }
}

const ParagraphComponent: Component = {
  name: 'Paragraph',
  content: {
    name: 'Paragraph',
    type: 'p',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      marginTop: '$props.marginTop',
      marginBottom: '$props.marginBottom',
      marginLeft: '$props.marginLeft',
      marginRight: '$props.marginRight',
      color: '$props.color',
    },
  },
}

export default ParagraphComponent
