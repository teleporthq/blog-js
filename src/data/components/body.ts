import parseChildren from '../../utils/parseChildren'

export function Body(...args: Arguments): ComponentReference {
  return {
    type: 'BodyComponent',
    props: {
      children: parseChildren(arguments),
    }
  }
}

const BodyComponent: Component = {
  name: 'BodyComponent',
  content: {
    name: 'BodyComponent',
    type: 'View',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      margin: 'auto',
      maxWidth: '740px',
      padding: '20px' 
    }
  }
}

export default BodyComponent