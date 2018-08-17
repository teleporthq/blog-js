export function HeroSmall(src: string, alt: string): ComponentReference {
  return {
    type: 'HeroSmall',
    props: {
      src,
      alt
    }   
  } 
}

const HeroSmallComponent: Component = {
  name: 'HeroSmall',
  content: {
    name: 'HeroSmall',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      textAlign: 'center',
      width: '715px',
      height: '207px'
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

export default HeroSmallComponent