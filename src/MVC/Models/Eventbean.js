const Events = (dispath) => {
    return {
      setId: (id) => {
        dispath({
          type: "SET_EVENT_ID",
          payload: id
        })
      }, setEventname: (eventname) => {
        dispath({
          type: "SET_EVENTNAME",
          payload: eventname
        })
      }, setPrice: (price) => {
        dispath({
          type: "SET_PRICE",
          payload: price
        })
      }, setPrice: (description) => {
        dispath({
          type: "SET_DESCRIPTION",
          payload: description
        })
      }
    }
  }
  export default Events