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
      fontWeight: '700',
      textAlign: '$props.textAlign',
	    fontSize: '2.1rem',
      lineHeight: 1.4
    }
  }
}

export default TitleComponent