export function NavigationItem(
	children: Children | ComponentReference
): ComponentReference {
	return {
		type: 'NavigationItemComponent',
		props: {
			children,
		}
	}
}

const NavigationItemComponent: Component = {
  name: 'NavigationItemComponent',
  content: {
    name: 'NavigationItem',
    type: 'Text',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      padding: '0 10px',
      color: '#aeaeae',
	    '@media (max-width: 600px)': {
		    padding: '0 8px'
	    }
    }
  }  
}

export default NavigationItemComponent
