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
      '@media (max-width: 992px)': {
        position: 'relative',
        margin: '0% 100%',
        marginBottom: '30px',
        // padding: '0% 50% 0% 50%',
        boxSizing: 'border-box',
      },
    },
    children: '$props.children',
  },
}

export default FooterRegisterComponent
