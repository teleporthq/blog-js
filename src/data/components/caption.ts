import parseChildren from '../../utils/parseChildren'

export function Caption(...args: Arguments): ComponentReference {
  return {
    type: 'CaptionComponent',
    props: {
      children: parseChildren(arguments),
    },
  }
}

const CaptionComponent: Component = {
  name: 'CaptionComponent',
  content: {
    name: 'CaptionComponent',
    type: 'p',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      marginTop: '10px',
      textAlign: 'center',
      fontStyle: 'italic',
      fontSize: '1rem',
    },
  },
}

export default CaptionComponent
