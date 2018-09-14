export function Logo(circle: string, square: string, triangle: string, writing: string): ComponentReference {
  return {
    type: 'LogoComponent',
    props: {
      circle,
      square,
      triangle,
      writing,
    },
  }
}

const LogoComponent: Component = {
  name: 'LogoComponent',
  content: {
    name: 'LogoComponent',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      display: 'flex',
    },
    children: [
      {
        source: 'teleport-elements-core',
        type: 'View',
        name: 'LogoContainer',
        style: {
          width: '40px',
          height: '40px',
          overflow: 'hidden',
          position: 'relative',
          margin: '0 10px 0 0',
          clipPath: 'circle(20px at center)',
        },
        children: [
          {
            source: 'teleport-elements-core',
            type: 'Image',
            name: 'Circle',
            props: {
              src: '$props.circle',
              alt: 'teleportHQ',
            },
            style: {
              height: 'inherit',
              width: 'inherit',
              borderRadius: '40px',
              backgroundColor: 'purple',
              position: 'absolute',
              top: '0',
              left: '0',
            },
          },
          {
            source: 'teleport-elements-core',
            type: 'Image',
            name: 'Square',
            props: {
              src: '$props.square',
              alt: 'teleportHQ',
            },
            style: {
              width: '39px',
              height: '34px',
              opacity: '0.9',
              position: 'absolute',
              top: '10px',
              left: '-8px',
            },
          },
          {
            source: 'teleport-elements-core',
            type: 'Image',
            name: 'Triangle',
            props: {
              src: '$props.triangle',
              alt: 'teleportHQ',
            },
            style: {
              width: '30px',
              height: '28px',
              opacity: '0.7',
              position: 'absolute',
              left: '17px',
            },
          },
        ],
      },
      {
        source: 'teleport-elements-core',
        type: 'Image',
        name: 'LogoWriting',
        style: {
          height: '100%',
          alignSelf: 'center',
        },
        props: {
          src: '$props.writing',
          alt: 'teleportHQ',
        },
      },
    ],
  },
}

export default LogoComponent
