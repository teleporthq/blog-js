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
      position: 'absolute',
      right: '120px',
    },
    children: '$props.children',
  },
}

export default SocialButtonsComponent
