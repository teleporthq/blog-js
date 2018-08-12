export function NextLink(
  children: string | Content | ComponentReference,
  href: string 
): ComponentReference {
  return {
    type: 'NextLinkComponent',
    props: {
      children: typeof children !== 'string' ? new Array(children) : children,
      href
    }  
  }
}

const NextLinkComponent: Component = {
  name: 'NextLinkComponent',
  content: {
    name: 'NextLinkComponent',
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
      children: 'test'
    }]
  } 
}

export default NextLinkComponent