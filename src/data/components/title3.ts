export function Title3(value: string, fontSize = '1rem'): ComponentReference {
	return {
		type: 'TitleComponent3',
		props: {
			children: value,
			fontSize
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
      marginTop: '30px',
      color: '#323232',
      fontSize: '$props.fontSize',
      fontWeight: 600
    }
  }
}

export default TitleComponent3