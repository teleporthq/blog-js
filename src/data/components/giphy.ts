export function Giphy(src: string, paddingBottom: string): ComponentReference {
  return {
    type: 'GiphyComponent',
    props: {
      src,
      paddingBottom,
    },
  }
}

const GiphyComponent: Component = {
  name: 'GiphyComponent',
  content: {
    name: 'GiphyComponent',
    type: 'View',
    source: 'teleport-elements-core',
    props: {
      test: 'test',
    },
    style: {
      width: '100%',
      position: 'relative',
      paddingBottom: '$props.paddingBottom',
    },
    children: [
      {
        name: 'Iframe',
        type: 'Iframe',
        source: 'teleport-elements-core',
        props: {
          src: '$props.src',
          frameBorder: '0',
          allowFullScreen: true,
        },
        style: {
          width: '100%',
          height: '100%',
          className: 'giphy-embed',
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
        },
      },
    ],
  },
}

export default GiphyComponent
