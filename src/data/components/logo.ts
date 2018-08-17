export function Logo(): ComponentReference {
  return {
    type: 'LogoComponent'
  }
}

const LogoComponent: Component = {
  name: 'LogoComponent',
  content: {
    name: 'LogoComponent',
    type: 'View',
    source: 'teleport-elements-core',
    children: [{
      name: 'NextLink',
      props: {
        href: '/',
        children: [{
          name: 'Logo',
          type: 'Image', 
          source: 'teleport-elements-core',
          props: { 
            src: 'static/logo.png',
            alt: 'Teleport logo'
          }
        }]
      }
    }]
  }
}

export default LogoComponent