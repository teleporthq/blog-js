import parseChildren from '../../utils/parseChildren'

export function SocialButtons(...args: Arguments): ComponentReference {
  return {
    type: 'SocialButtonsComponent',
    props: {
      children: parseChildren(arguments),
    },
  }
}

const SocialButtonsComponent: Component = {
  name: 'SocialButtonsComponent',
  content: {
    name: 'SocialButtonsComponent',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      display: 'flex',
      justifyContent: 'center',
      height: '18px',
      width: '100px',
      margin: '0px 100px',
      '@media (max-width: 992px)': {
        paddingTop: '10px',
      },
    },
    children: '$props.children',
  },
}

export default SocialButtonsComponent
