export function Hero(src: string, alt: string, backgroundColor:string = 'transparent'): ComponentReference {
  return {
    type: 'HeroComponent',
    props: {
      src,
      alt,
      backgroundColor
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
	    backgroundColor: '$props.backgroundColor',
      lineHeight: 0
    },
    children: [{
      name: 'HeroImage',
      type: 'Image',
      source: 'teleport-elements-core',
      props: { 
        src: '$props.src',
        alt: '$props.alt',
      },
      style: {
        height: 'auto',
        maxWidth: '100%',
        maxHeight: '353px',
      }
    }]  
  }
}

export default HeroComponent