export function Gist(id: string, file?: string): ComponentReference {
  return {
    type: 'TitleComponent',
    props: {
      id,
      file: file || '',
    },
  }
}

const GistComponent: Component = {
  name: 'TitleComponent',
  content: {
    name: 'Gist',
    type: 'Gist',
    source: 'teleport-elements-core',
    props: {
      id: '$props.id',
      file: '$props.file',
    },
  },
}

export default GistComponent
