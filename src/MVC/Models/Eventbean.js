const Events = (dispath) => {
  return {
    setId: (id) => {
      dispath({
        type: "SET_EVENT_ID",
        payload: id
      })
    },
    setEventname: (eventname) => {
      dispath({
        type: "SET_EVENTNAME",
        payload: eventname
      })
    },
    setPrice: (price) => {
      dispath({
        type: "SET_EVENT_PRICE",
        payload: price
      })
    },
    setDescription: (description) => {
      dispath({
        type: "SET_EVENT_DESCRIPTION",
        payload: description
      })
    },
    setCategolry: (categolry) => {
      dispath({
        type: "SET_EVENT_CATEGOLRY",
        payload: categolry
      })
    },
    setImages: (images) => {
      dispath({
        type: "SET_EVENT_IMAGES",
        payload: images
      })
    },
    setEventamount: (eventamount) => {
      dispath({
        type: "SET_EVENT_AMOUNT",
        payload: eventamount
      })
    }
  }
}
export default Events