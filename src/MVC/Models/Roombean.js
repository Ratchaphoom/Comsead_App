const Room = (dispath) => {
  return {
    setID: (id) => {
      dispath({
        type: "SET_ROOM_ID",
        payload: id
      })
    },
    setRoomName: (roomname) => {
      dispath({
        type: "SET_ROOMNAME",
        payload: roomname
      })
    },
    setPrice: (price) => {
      dispath({
        type: "SET_ROOM_PRICE",
        payload: price
      })
    },
    setDescription: (description) => {
      dispath({
        type: "SET_ROOM_DESCRIPTION",
        payload: description
      })
    },
    setCategolry: (categolry) => {
      dispath({
        type: "SET_ROOM_CATEGOLRY",
        payload: categolry
      })
    },
    setImages: (images) => {
      dispath({
        type: "SET_ROOM_IMAGES",
        payload: images
      })
    },
    setAmount: (amount) => {
      dispath({
        type: "SET_AMOUNT",
        payload: amount
      })
    }
  }
}
export default Room