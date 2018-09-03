export function Title2(value: string, textAlign = 'left', fontWeight = 600, fontSize = '1.4em'): ComponentReference {
  return {
    type: 'TitleComponent2',
    props: {
      children: value,
      textAlign,
      fontWeight,
      fontSize,
    },
  }
}

const TitleComponent2: Component = {
  name: 'TitleComponent2',
  content: {
    name: 'TitleComponent2',
    type: 'H2',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      fontWeight: '$props.fontWeight',
      textAlign: '$props.textAlign',
      fontSize: '$props.fontSize',
      lineHeight: '1.4',
    },
  },
}

export default TitleComponent2
