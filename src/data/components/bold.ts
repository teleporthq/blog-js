import parseChildren from '../../utils/parseChildren'

export function Bold(
  ...args: Arguments
): ComponentReference {
  return {
    type: 'Bold',
    props: {
      children: parseChildren(arguments)
    }
  }
}

const BoldComponent: Component = {
  name: 'Bold',
  content: {
    name: 'Bold',
    type: 'Text',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      fontWeight: '700'
    }
  }
}

export default BoldComponent