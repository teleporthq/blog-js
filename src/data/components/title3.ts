export function Title3(value: string, textAlign = 'left', fontSize = '1em', color = '#323232', marginTop = '30px', marginBottom = '0px'): ComponentReference {
	return {
		type: 'TitleComponent3',
		props: {
			children: value,
			textAlign,
			fontSize,
			color,
			marginTop,
			marginBottom,
		}
	}
}

const TitleComponent3: Component = {
  name: 'TitleComponent3',
  content: {
    name: 'TitleComponent3',
    type: 'H3',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      marginTop: '$props.marginTop',
      marginBottom: '$props.marginBottom',
      color: '$props.color',
      fontSize: '$props.fontSize',
      textAlign: '$props.textAlign',
      fontWeight: 600
    }
  }
}

export default TitleComponent3