import parseChildren from '../../utils/parseChildren'

export function Span(...args: Arguments) {
  return {
    type: 'SpanComponent',
    props: {
      children: parseChildren(arguments),
    },
  }
}

const SpanComponent: Component = {
  name: 'SpanComponent',
  content: {
    name: 'Span',
    type: 'Text',
    source: 'teleport-elements-core',
    children: '$props.children',
  },
}

export default SpanComponent
