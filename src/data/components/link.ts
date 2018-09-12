export function Link(children: string | Content | ComponentReference | Children, href: string): ComponentReference {
  return {
    type: 'LinkClass',
    props: {
      children: typeof children === 'string' ? children : Array.isArray(children) ? children : [children],
      href,
    },
  }
}

const LinkComponent: Component = {
  name: 'LinkClass',
  content: {
    name: 'Link',
    type: 'Link',
    source: 'teleport-elements-core',
    props: {
      href: '$props.href',
      prefetch: true,
    },
    children: [
      {
        name: 'a',
        type: 'A',
        source: 'teleport-elements-core',
        children: '$props.children',
      },
    ],
  },
}

export default LinkComponent
