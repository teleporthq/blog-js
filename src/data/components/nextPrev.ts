import parseChildren from '../../utils/parseChildren'

export function Paragraph(...args: Arguments): ComponentReference {
  return {
    type: 'Paragraph',
    props: {
      children: parseChildren(arguments),
    },
  }
}

export function NextPrev(prevText: string, prevUrl: string, nextText: string, nextUrl: string): ComponentReference {
  return {
    type: 'NextPrev',
    props: {
      // @ts-ignore
      prevText,
      prevUrl,
      nextText,
      nextUrl,
    },
  }
}

const NextPrevComponent: Component = {
  name: 'NextPrev',
  content: {
    name: 'NextPrev',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      display: 'flex',
      marginTop: '100px',
    },
    children: [
      {
        source: 'teleport-elements-core',
        type: 'A',
        name: 'PreviousLink',
        style: {
          color: 'inherit',
          textDecoration: 'underline',
        },
        children: '$props.prevText',
        props: {
          href: '$props.prevUrl',
        },
      },
      {
        source: 'teleport-elements-core',
        type: 'View',
        name: 'PrevNextCenter',
        style: {
          display: 'flex',
          flex: '1',
        },
      },
      {
        source: 'teleport-elements-core',
        type: 'A',
        name: 'NextLink',
        style: {
          color: 'inherit',
          textDecoration: 'underline',
        },
        children: '$props.nextText',
        props: {
          href: '$props.nextUrl',
        },
      },
    ],
  },
}

export default NextPrevComponent

// name: 'ExternalLinkComponent',
//   content: {
//     name: 'ExternalLinkComponent',
//     type: 'A',
//     source: 'teleport-elements-core',
//     children: '$props.children',
//     style: {
//       color: 'inherit',
//       textDecoration: 'underline',
//     },
//     props: {
//       href: '$props.src',
//       target: '_blank',
//     },
//   }
