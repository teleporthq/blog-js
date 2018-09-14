export default function(params: Arguments) {
  if (params.length === 1 && typeof params[0] === 'string') return params[0]

  return params.map((value) => {
    if (typeof value === 'string') {
      return {
        name: 'Text',
        type: 'Text',
        source: 'teleport-elements-core',
        children: value,
      }
    }

    return value
  })
}
