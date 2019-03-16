export function FooterInfo(children: Children | ComponentReference): ComponentReference {
  return {
    type: 'FooterInfo',
    props: {
      children,
    },
  }
}

const FooterInfoComponent: Component = {
  name: 'FooterInfo',
  content: {
    name: 'FooterInfo',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      display: 'flex',
      flexDirection: 'column',
    },
    children: '$props.children',
  },
}

export default FooterInfoComponent
