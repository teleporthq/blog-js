export function FooterRegister(children: Children | ComponentReference): ComponentReference {
  return {
    type: 'FooterRegister',
    props: {
      children,
    },
  }
}

const FooterRegisterComponent: Component = {
  name: 'FooterRegister',
  content: {
    name: 'FooterRegister',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      flex: 1,
      textAlign: 'center',
    },
    children: '$props.children',
  },
}

export default FooterRegisterComponent
