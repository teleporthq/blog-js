export function LogoIcon(src: string) {
  return {
    type: 'LogoIcon',
    props: {
      src
    }
  }
}

const LogoIconComponent: Component = {
  name: 'LogoIcon',
  content: {
    name: 'LogoIcon',
    source: 'teleport-elements-core',
    type: 'View',
    style: {
      display: 'inline',
      margin: '0 5px'
    },
    children: [{
      name: 'Icon',
      source: 'teleport-elements-core',
      type: 'Image',
      props: {
        src: '$props.src'
      }, 
      style: {
        opacity: '$props.opacity'
      }
    }]
  }
}

export default LogoIconComponent
