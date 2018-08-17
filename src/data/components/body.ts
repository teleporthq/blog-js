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
      maxWidth: '740px',
      width: '100%',
      padding: '20px',
      boxSizing: 'border-box'
    }
  }
}

export default BodyComponent