import parseChildren from '../../utils/parseChildren'

export function FinalFooter(...args: Arguments): ComponentReference {
  return {
    type: 'FinalFooter',
    props: {
      children: parseChildren(arguments),
    },
  }
}

const FinalFooterComponent: Component = {
  name: 'FinalFooter',
  content: {
    name: 'FinalFooter',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      backgroundColor: '#f7f7f7',
      fontSize: '0.7em',
      color: '#323232',
      '@media (max-width: 1258px)': {
        padding: '10px 0px',
      },
    },
    children: '$props.children',
  },
}

export default FinalFooterComponent
