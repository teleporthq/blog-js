export function AuthorCard(
  props: {
    src: string,
    name: string,
    twitterHandle: string,
    twitterLink: string,
  }
): ComponentReference {
  return {
    type: 'AuthorCard',
    props
  }  
}

export default {
  name: 'AuthorCard',
  content: {
    name: 'AuthorCard',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      display: 'flex'
    },
    children: [
      {
        source: 'teleport-elements-core',
        type: 'Image',
        name: 'author',
        style: {
          height: '60px',
          width: '60px',
          borderRadius: '50%'
        },
        props: {
          src: '$props.src'
        }
      },
      {
        source: 'teleport-elements-core',
        type: 'View',
        name: 'Author',
        style: {
          display: 'flex',
          flexDirection: 'column',
	        justifyContent: 'center',
	        marginLeft: '15px'
        },
        children: [
          {
            source: 'teleport-elements-core',
            type: 'Text',
            name: 'Name',
            children: '$props.name'
          },
          {
            source: 'teleport-elements-core',
            type: 'Link',
            name: 'Role',
            children: [{
              name: 'link',
              source: 'teleport-elements-core',
              type: 'A',
              children: '$props.twitterHandle',
            }],
            props: {
              href: '$props.twitterLink'
            }
          }
        ]
      }
    ],

  }
} 