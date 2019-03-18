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
        style: {},
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
              margin: '0px 25px',
              paddingBottom: '20px',
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
              margin: '0px 25px',
              paddingBottom: '20px',
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
              margin: '0px 25px',
              paddingBottom: '20px',
            },
          },
        ],
      },
    ],
  },
}

export default FlagsComponent
