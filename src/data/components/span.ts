import parseChildren from '../../utils/parseChildren'

export function Span(
  ...args: Arguments
) {
  return {
    type: 'SpanComponent',
    props: {
      children: parseChildren(arguments)
    }
  }
}

export default {
  name: 'SpanComponent',
  content: {
    name: 'Span',
    type: 'Text',
    source: 'teleport-elements-core',
    children: '$props.children'
  }  
}
