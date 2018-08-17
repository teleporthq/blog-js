export function Title(value: string, textAlign = 'left'): ComponentReference {
  return {
    type: 'TitleComponent',
    props: {
      children: value,
      textAlign
    }
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
      fontSize: '34px',
      fontWeight: '700',
      textAlign: '$props.textAlign'
    }
  }
}

export default TitleComponent