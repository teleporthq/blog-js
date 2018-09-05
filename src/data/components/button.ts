export function Button(children: Children, display = 'inline'): ComponentReference {
  return {
    type: 'Button',
    props: {
      children,
      display,
    },
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
      display: '$props.display',
      justifyContent: 'center',
      minWidth: '200px',
      borderRadius: '4px',
      border: 'solid 2px #822cec',
      color: '#822cec',
      textTransform: 'uppercase',
      padding: '6px 15px',
      fontWeight: '900',
      textDecoration: 'none',
      '&:hover': {
        background: '#822cec',
        color: '#fff',
      },
    },
  },
}

export default ButtonComponent
