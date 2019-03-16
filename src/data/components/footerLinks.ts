export function FooterLinks(children: Children | ComponentReference): ComponentReference {
  return {
    type: 'FooterLinks',
    props: {
      children,
    },
  }
}

const FooterLinksComponent: Component = {
  name: 'FooterLinks',
  content: {
    name: 'FooterLinks',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      // flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    children: '$props.children',
  },
}

export default FooterLinksComponent
