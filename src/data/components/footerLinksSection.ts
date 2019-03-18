export function FooterLinksSection(children: Children | ComponentReference): ComponentReference {
  return {
    type: 'FooterLinksSection',
    props: {
      children,
    },
  }
}

const FooterLinksSectionComponent: Component = {
  name: 'FooterLinksSection',
  content: {
    name: 'FooterLinksSection',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      display: 'flex',
      flex: '1',
      justifyContent: 'space-between',
      width: '100%',
      color: '#323232',
      padding: '0px 20px',
      '@media (max-width: 992px)': {
        borderTop: 'solid 1px #00000010',
        padding: '30px 70px 0px 70px',
      },
    },
    children: '$props.children',
  },
}

export default FooterLinksSectionComponent
