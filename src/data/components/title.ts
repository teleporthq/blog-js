export function Title(value: string, textAlign = 'left', fontWeight = 700, fontSize = '1.6em'): ComponentReference {
  return {
    type: 'TitleComponent',
    props: {
      children: value,
      textAlign,
      fontWeight,
      fontSize,
    },
  }
}

const TitleComponent: Component = {
  name: 'TitleComponent',
  content: {
    name: 'TitleComponent',
    type: 'H1',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      fontWeight: '$props.fontWeight',
      textAlign: '$props.textAlign',
      fontSize: '$props.fontSize',
      lineHeight: 1.4,
    },
  },
}

export default TitleComponent
