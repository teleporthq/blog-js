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
      margin: 'auto',
      width: '740px',
      maxWidth: '740px',
      padding: '20px' 
    }
  }
}

export default BodyComponent