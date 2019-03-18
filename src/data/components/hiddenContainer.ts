import parseChildren from '../../utils/parseChildren'

export function HiddenContainer(...args: Arguments): ComponentReference {
  return {
    type: 'HiddenContainer',
    props: {
      children: parseChildren(arguments),
    },
  }
}

const HiddenContainerComponent: Component = {
  name: 'HiddenContainer',
  content: {
    name: 'HiddenContainer',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      width: '100px',
      margin: '0px 100px',
      boxSizing: 'content-box',
      '@media (max-width: 1258px)': {
        margin: '0% 100%',
      },
    },
    children: '$props.children',
  },
}

export default HiddenContainerComponent
