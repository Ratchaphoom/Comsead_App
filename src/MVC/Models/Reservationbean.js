const Reservation = (dispath) => {
  return {
    setID: (id) => {
      dispath({
        type: "SET_RESERVATION_ID",
        payload: id
      })
    },
    setUsername: (username) => {
      dispath({
        type: "SET_USERNAME",
        payload: username
      })
    },
    setCount: (count) => {
      dispath({
        type: "SET_COUNT",
        payload: count
      })
    },
    setCheckin: (checkin) => {
      dispath({
        type: "SET_CHECKIN",
        payload: checkin
      })
    },
    setCheckout: (checkout) => {
      dispath({
        type: "SET_CHECKOUT",
        payload: checkout
      })
    },
    setAmountroom: (amountroom) => {
      dispath({
        type: "SET_AMOUNT_ROOM",
        payload: amountroom
      })
    },
    setExtrabed: (extrabed) => {
      dispath({
        type: "SET_EXTRABED",
        payload: extrabed
      })
    },
    setRoomname: (roomname) => {
      dispath({
        type: "SET_ROOMNAME",
        payload: roomname
      })
    },
    setPriceofRoom: (priceofroom) => {
      dispath({
        type: "SET_ROOM_PRICE",
        payload: priceofroom
      })
    },
    setActivityname: (activityname) => {
      dispath({
        type: "SET_ACTIVITYNAME",
        payload: activityname
      })
    },
    setPriceofActivity: (priceofactivty) => {
      dispath({
        type: "SET_ACTIVITY_PRICE",
        payload: priceofactivty
      })
    },
    setEventname: (eventname) => {
      dispath({
        type: "SET_EVENTNAME",
        payload: eventname
      })
    },
    setPriceofEvent: (priceofevent) => {
      dispath({
        type: "SET_EVENT_PRICE",
        payload: priceofevent
      })
    },
    setTotals: (totals) => {
      dispath({
        type: "SET_TOTALS",
        payload: totals
      })
    },
    setActivityamount: (activityamount) => {
      dispath({
        type: "SET_ACTIVITY_AMOUNT",
        payload: activityamount
      })
    },
    setEventamount: (eventamount) => {
      dispath({
        type: "SET_EVENT_AMOUNT",
        payload: eventamount
      })
    },
    setBillStatus: (billstatus) => {
      dispath({
        type: "SET_BILL_STATUS",
        payload: billstatus
      })
    }
  }
}
export default Reservation