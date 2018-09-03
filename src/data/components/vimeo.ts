export function Vimeo(src: string): ComponentReference {
  return {
    type: 'VimeoComponent',
    props: {
      src,
    },
  }
}

const VimeoComponent: Component = {
  name: 'VimeoComponent',
  content: {
    name: 'Iframe',
    type: 'Iframe',
    source: 'teleport-elements-core',
    props: {
      src: '$props.src',
      width: '640px',
      height: '296px',
      frameBorder: '0',
      webkitallowfullfcreen: '',
      mozallowfullscreen: '',
      allowFullScreen: '',
    },
  },
}

export default VimeoComponent
