import parseChildren from '../../utils/parseChildren'

export function Button(
  ...args: Arguments
): ComponentReference {
  return {
    type: 'Button',
    props: {
      children: parseChildren(arguments)
    }
  }
}

const ButtonComponent: Component = {
  name: 'Button',
  content: {
    name: 'Button',
    type: 'Text',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
	    display: 'inline-flex',
      justifyContent: 'center',
      minWidth: '200px',
      borderRadius: '4px',
      border: 'solid 2px #822cec',
      color: '#822cec',
      textTransform: 'uppercase',
      padding: '2px 15px',
      fontWeight: '900',
      textDecoration: 'none'
    }
  }
}

export default ButtonComponent