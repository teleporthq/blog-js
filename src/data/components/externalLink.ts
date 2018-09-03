export function ExternalLink(children: string | Content | ComponentReference, src: string): ComponentReference {
  return {
    type: 'ExternalLinkComponent',
    props: {
      children: typeof children !== 'string' ? new Array(children) : children,
      src,
    },
  }
}

const ExternalLinkComponent: Component = {
  name: 'ExternalLinkComponent',
  content: {
    name: 'ExternalLinkComponent',
    type: 'A',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      color: 'inherit',
      textDecoration: 'underline',
    },
    props: {
      href: '$props.src',
      target: '_blank',
    },
  },
}

export default ExternalLinkComponent
