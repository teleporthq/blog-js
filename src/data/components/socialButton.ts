export function SocialButton(
  children: string | Content | ComponentReference | Children,
  href: string
): ComponentReference {
  return {
    type: 'SocialButton',
    props: {
      children: typeof children === 'string' ? children : Array.isArray(children) ? children : [children],
      href,
    },
  }
}

const SocialButtonComponent: Component = {
  name: 'SocialButton',
  content: {
    name: 'View',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      margin: '0px 5px 0px 5px',
    },
    children: [
      {
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
    ],
  },
}

export default SocialButtonComponent
