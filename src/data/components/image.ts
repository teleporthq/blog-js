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
    style: {
      '@media (max-width: 600px)': {
        display: 'block',
        float: 'none',
        textAlign: 'center'
      },
      float: 'left',
      display: 'inline',
      margin: '20px'
    },
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