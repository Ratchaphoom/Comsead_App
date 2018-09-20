const Room = (dispath) => {
    return {
      setID: (id) => {
        dispath({
          type: "SET_ROOM_ID",
          payload: id
        })
      }, setRoomName: (roomname) => {
        dispath({
          type: "SET_ROOMNAME",
          payload: roomname
        })
      }, setPrice: (price) => {
        dispath({
          type: "SET_PRICE",
          payload: price
        })
      }, setDescription: (description) => {
        dispath({
          type: "SET_DESCRIPTION",
          payload: description
        })
      }
    }
  }
  export default Room