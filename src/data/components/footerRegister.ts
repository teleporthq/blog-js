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
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      textAlign: 'center',
      position: 'absolute',
    },
    children: '$props.children',
  },
}

export default FooterRegisterComponent
