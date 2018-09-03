export default function getChildren(params: IArguments) {
  if (Object.keys(params).length === 1 && typeof params[0] === 'string') return params[0]

  return Object.keys(params).map((value, index) => {
    if (typeof params[index] === 'string') {
      return {
        name: 'Text',
        type: 'Text',
        source: 'teleport-elements-core',
        children: params[index],
      }
    }

    return params[index]
  })
}
