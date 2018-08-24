export function FooterInfo(
	children: Children | ComponentReference
): ComponentReference {
	return {
		type: 'FooterInfo',
		props: {
			children
    }
	}
}

const FooterInfoComponent: Component = {
  name: 'FooterInfo',
  content: {
    name: 'FooterInfo',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
			margin: '40px',
	    flex: 1
    },
	  children:'$props.children',
  }
}

export default FooterInfoComponent