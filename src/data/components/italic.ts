import parseChildren from '../../utils/parseChildren'

export function Italic(
  ...args: Arguments
) {
  return {
    type: 'ItalicComponent',
    props: {
      children: parseChildren(arguments)
    }
  }
}

export default {
  name: 'ItalicComponent',
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
