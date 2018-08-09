export function AutoScaleImage(props: { src: string, alt: string }): ComponentReference {
  return {
    type: 'AutoScaleImage',
    props
  }
}

export default {
  name: 'AutoScaleImage',
  content: {
    name: 'ImageContainer',
    type: 'View',
    source: 'teleport-elements-core',
    children: [{
      name: 'Image',
      type: 'Image',
      source: 'teleport-elements-core',
      style: {
        width: '100%',
        height: 'auto',
        marginTop: '30px'
      },
      props: {
        src: '$props.src',
        alt: '$props.alt'
      }
    }]
  }
}