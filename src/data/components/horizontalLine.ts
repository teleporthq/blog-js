export function HorizontalLine(): ComponentReference {
  return {
    type: 'HorizontalLine'
  }  
}

const HorizontalLineComponent: Component = {
  name: 'HorizontalLine',
  content: {
    name: 'HorizontalLine',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      height: '1px',
      backgroundColor: '#eaeaea'
    }
  }
} 

export default HorizontalLineComponent