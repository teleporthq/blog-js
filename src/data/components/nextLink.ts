export function NextLink(
  children: string | Content | ComponentReference | Children,
  href: string 
): ComponentReference {
  return {
    type: 'NextLink',
    props: {
      children: typeof children === 'string'
        ? [{
          name: 'a',
          type: 'A',
          source: 'teleport-elements-core',
          children: '$props.children'
        }]
        : Array.isArray(children)
          ? children
          : new Array(children),
      href
    }
  }
}

const NextLinkComponent: Component = {
  name: 'NextLink',
  content: {
    name: 'NextLink',
    type: 'Link', 
    source: 'teleport-elements-core',
    props: {
      href: '$props.href',
      prefetch: true 
    },
    children: [{
      name: 'a',
      type: 'A',
      source: 'teleport-elements-core',
      children: '$props.children'
    }]
  } 
}

export default NextLinkComponent