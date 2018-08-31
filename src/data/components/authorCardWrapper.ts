export function AuthorCardWrapper(
	children: Children | ComponentReference
): ComponentReference {
	return {
		type: 'AuthorCardWrapper',
		props: {
			children,
		}
	}
}

const AuthorCardWrapperComponent: Component = {
  name: 'AuthorCardWrapper',
  content: {
    name: 'AuthorCardWrapper',
    type: 'View',
    source: 'teleport-elements-core',
    children: '$props.children',
    style: {
      margin: '-12px 0 20px',
	    display: 'flex',
	    fontSize: '0.75em',
	    justifyContent: 'space-between',
			alignItems: 'center'
    },
  }
}

export default AuthorCardWrapperComponent
