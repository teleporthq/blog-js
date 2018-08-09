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
      height: '72px', 
      lineHeight: '72px'
    }, 
    children: '$props.children' 
  }
}

export default FooterComponent