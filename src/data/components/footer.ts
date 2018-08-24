export function Footer(
	children: Children | ComponentReference
): ComponentReference {
	return {
		type: 'Footer',
		props: {
			children
		}
	}
}

const FooterComponent: Component = {
  name: 'Footer',
  content: {
    name: 'Footer',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      display: 'flex',
      backgroundColor: '#f7f7f7',
      margin: '40px 0 0',
      padding: '30px 20px 20px',
      fontSize: '0.8rem',
      color: '#323232'
    },
	  children: '$props.children'
  }
}

export default FooterComponent