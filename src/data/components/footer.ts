import parseChildren from '../../utils/parseChildren'

export function Footer(
  ...args: Arguments
) {
  return {
    type: 'Footer',
    props: {
      children: parseChildren(arguments)
    }
  }
}

const FooterComponent: Component = {
  name: 'Footer',
  content: {
    name: 'Footer',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      backgroundColor: '#f6f6f6',
      textAlign: 'center',
      marginTop: '1.8rem',
      padding: '1.4rem 0'
    },
    children: '$props.children' 
  }
}

export default FooterComponent