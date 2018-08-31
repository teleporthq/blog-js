import parseChildren from '../../utils/parseChildren'

export function Body(...args: Arguments): ComponentReference {
  return {
    type: 'Body',
    props: {
      children: parseChildren(arguments),
    }
  }
}
const BodyComponent: Component = {
  name: 'Body',
  content: {
    name: 'Body',
    type: 'View',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      flex: '1',
      alignSelf: 'center',
      maxWidth: '755px',
      width: '100%',
      padding: '0 20px 20px',
      boxSizing: 'border-box',
	    '@media (max-width: 600px)': {
		    padding: '0 20px 20px',
	    }
    }
  }
}

export default BodyComponent