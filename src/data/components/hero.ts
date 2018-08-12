export function Hero(src: string, alt: string): ComponentReference {
  return {
    type: 'HeroComponent',
    props: {
      src,
      alt
    }   
  } 
}

const HeroComponent: Component = {
  name: 'HeroComponent',
  content: {
    name: 'HeroComponent',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      textAlign: 'center',
      height: '353px'
    },
    children: [{
      name: 'HeroImage',
      type: 'Image',
      source: 'teleport-elements-core',
      props: { 
        src: '$props.src',
        alt: '$props.alt'
      },
      style: {
        height: 'inherit',
        width: 'auto'
      }
    }]  
  }
}

export default HeroComponent