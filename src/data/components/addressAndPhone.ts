export function AddressAndPhone(address: string, phone: string): ComponentReference {
  return {
    type: 'AddressAndPhone',
    props: {
      address,
      phone,
    },
  }
}

const AddressAndPhoneComponent: Component = {
  name: 'AddressAndPhone',
  content: {
    name: 'AddressAndPhone',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      display: 'flex',
      justifyContent: 'center',
    },
    children: [
      {
        source: 'teleport-elements-core',
        name: 'address',
        type: 'View',
        children: '$props.address',
        style: {
          margin: '0px 10px 0px 10px',
        },
      },
      {
        source: 'teleport-elements-core',
        name: 'phone',
        type: 'View',
        children: '$props.phone',
        style: {
          margin: '0px 10px 0px 10px',
        },
      },
    ],
  },
}

export default AddressAndPhoneComponent
