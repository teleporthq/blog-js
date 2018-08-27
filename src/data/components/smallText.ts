export function SmallText(
  children: Children,
  fontSize = '0.8em'
): ComponentReference {
  return {
    type: 'SmallText',
    props: {
      children,
      fontSize
    }
  } 
}

const SmallTextComponent: Component = {
  name: 'SmallText',
  content: { 
    name: 'SmallText',
    type: 'p',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      fontSize: '$props.fontSize'
    }
  }
}

export default SmallTextComponent
