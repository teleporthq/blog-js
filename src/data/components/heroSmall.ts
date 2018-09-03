export function HeroSmall(src: string, alt: string): ComponentReference {
  return {
    type: 'HeroSmall',
    props: {
      src,
      alt,
    },
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
      lineHeight: 0,
    },
    children: [
      {
        name: 'HeroImage',
        type: 'Image',
        source: 'teleport-elements-core',
        props: {
          src: '$props.src',
          alt: '$props.alt',
        },
        style: {
          width: '100%',
          height: 'auto',
        },
      },
    ],
  },
}

export default HeroSmallComponent
