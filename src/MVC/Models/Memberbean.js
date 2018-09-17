const Members = (dispath) => {
    return {
      setID: (id) => {
        dispath({
          type: "SET_ID",
          payload: id
        })
      }, setName: (name) => {
        dispath({
          type: "SET_NAME",
          payload: name
        })
      },setLastname: (lastname) => {
        dispath({
          type: "SET_LASTNAME",
          payload: lastname
        })
      },setPicture: (picture) => {
        dispath({
          type: "SET_PICTURE",
          payload: picture
        })
      },setTypemember: (typemember) => {
        dispath({
          type: "SET_TYPEMEMBER",
          payload: typemember
        })
      },setEmail: (email) => {
        dispath({
          type: "SET_EMAIL",
          payload: email
        })
      },setAddress: (address) => {
        dispath({
          type: "SET_ADDRESS",
          payload: address
        })
      }
    }
  }
  export default Members