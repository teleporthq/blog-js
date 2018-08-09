import parseChildren from '../../utils/parseChildren'

export function Italic(
  ...args: Arguments
) {
  return {
    type: 'Italic',
    props: {
      children: parseChildren(arguments)
    }
  }
}

export default {
  name: 'Italic',
  content: {
    name: 'Italic',
    type: 'Text',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      fontStyle: 'italic'
    } 
  }  
}
