export function Flags(): ComponentReference {
  return {
    type: 'FlagsComponent',
  }
}

const FlagsComponent: Component = {
  name: 'FlagsComponent',
  content: {
    name: 'FlagsComponent',
    type: 'View',
    source: 'teleport-elements-core',
    children: [
      {
        name: 'View',
        type: 'View',
        source: 'teleport-elements-core',
        style: {
          height: '40px',
          paddingBottom: '20px',
        },
        children: [
          {
            source: 'teleport-elements-core',
            name: 'eu',
            type: 'Image',
            props: {
              src: 'https://teleporthq.io/static/img/flags/eu.png',
              alt: 'European Union Flag',
            },
            style: {
              marginRight: '25px',
              marginLeft: '25px',
            },
          },
          {
            source: 'teleport-elements-core',
            name: 'eu',
            type: 'Image',
            props: {
              src: 'https://teleporthq.io/static/img/flags/ro.png',
              alt: 'European Union Flag',
            },
            style: {
              marginRight: '25px',
              marginLeft: '25px',
            },
          },
          {
            source: 'teleport-elements-core',
            name: 'ro',
            type: 'Image',
            props: {
              src: 'https://teleporthq.io/static/img/flags/funds.png',
              alt: 'European Union Flag',
            },
            style: {
              marginRight: '25px',
              marginLeft: '25px',
            },
          },
        ],
      },
    ],
  },
}

export default FlagsComponent
