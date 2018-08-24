export function Image(props: { src: string, alt: string }): ComponentReference {
  return {
    type: 'ImageComponent',
    props
  }
}

export default {
  name: 'ImageComponent',
  content: {
    name: 'ImageContainer',
    type: 'View',
    source: 'teleport-elements-core',
    children: [{
      name: 'Image',
      type: 'Image',
      source: 'teleport-elements-core',
      props: {
        src: '$props.src',
        alt: '$props.alt'
      }
    }]
  }
}