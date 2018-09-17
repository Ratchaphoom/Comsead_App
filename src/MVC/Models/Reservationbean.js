const Reservation = (dispath) => {
    return {
      setID: (id) => {
        dispath({
          type: "SET_ID",
          payload: id
        })
      },setUsername: (username) => {
        dispath({
          type: "SET_USERNAME",
          payload: username
        })
      },setCount: (count) => {
        dispath({
          type: "SET_COUNT",
          payload: count
        })
      },setCheckin: (checkin) => {
        dispath({
          type: "SET_CHECKIN",
          payload: checkin
        })
      },setCheckout: (checkout) => {
        dispath({
          type: "SET_CHECKOUT",
          payload: checkout
        })
      },setAmountroom: (amountroom) => {
        dispath({
          type: "SET_AMOUNT_ROOM",
          payload: amountroom
        })
      },setExtrabed: (extrabed) => {
        dispath({
          type: "SET_EXTRABED",
          payload: extrabed
        })
      },setRoomname: (roomname) => {
        dispath({
          type: "SET_ROOMNAME",
          payload: roomname
        })
      },setPriceofRoom: (priceofroom) => {
        dispath({
          type: "SET_PRICE_OF_ROOM",
          payload: priceofroom
        })
      },setActivityname: (activityname) => {
        dispath({
          type: "SET_ACTIVITYNAME",
          payload: activityname
        })
      },setPriceofActivity: (priceofactivty) => {
        dispath({
          type: "SET_PRICE_OF_ACTIVITY",
          payload: priceofactivty
        })
      },setEventname: (eventname) => {
        dispath({
          type: "SET_EVENTNAME",
          payload: eventname
        })
      },setPriceofEvent: (priceofevent) => {
        dispath({
          type: "SET_PRICE_OF_EVENT",
          payload: priceofevent
        })
      },setTotals: (totals) => {
        dispath({
          type: "SET_TOTALS",
          payload: totals
        })
      }
    }
  }
  export default Reservation