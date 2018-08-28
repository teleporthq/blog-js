import parseChildren from '../../utils/parseChildren'

export function NavigationItem(
  ...args: Arguments
) {
  return {
    type: 'NavigationItemComponent',
    props: {
      children: parseChildren(arguments)
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
      color: '#959595',
	    '@media (max-width: 600px)': {
		    padding: '0 8px'
	    }
    }
  }  
}
export default NavigationItemComponent
