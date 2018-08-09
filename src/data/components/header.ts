import parseChildren from '../../utils/parseChildren'

export function Header(
  ...args: Arguments
): ComponentReference {
  return {
    type: 'HeaderComponent',
    props: {
      children: parseChildren(arguments)
    }
  }
}

const HeaderComponent: Component = {
  name: 'HeaderComponent',
  content: {
    name: 'HeaderComponent',
    type: 'View',
    source: 'teleport-elements-core',
    children: [{
      name: 'Header',
      type: 'View',
      source: 'teleport-elements-core',
      style: {
        height: '70px',
        margin: '25px 0 0 31px'
      },
      children: '$props.children'
    }]
  }
}

export default HeaderComponent