const Reservations = (state = {
    id: null,
    count: null,
    username: null,
    checkin: null,
    checkout: null,
    amountroom: null,
    extrabed: null,
    roomname: null,
    priceofroom: null,
    activityname: null,
    priceofactivty: null,
    eventname: null,
    priceofevent: null,
    totals: null,
    activityamount: null,
    eventamount: null,
    billstatus: null
}, action) => {
    switch (action.type) {
        case 'SET_RESERVATION_ID':
            state = {
                ...state,
                id: action.payload
            }
            break;
        case 'SET_COUNT':
            state = {
                ...state,
                count: action.payload
            }
            break;
        case 'SET_CHECKIN':
            state = {
                ...state,
                checkin: action.payload
            }
            break;
        case 'SET_CHECKOUT':
            state = {
                ...state,
                checkout: action.payload
            }
            break;
        case 'SET_AMOUNT_ROOM':
            state = {
                ...state,
                amountroom: action.payload
            }
            break;
        case 'SET_EXTRABED':
            state = {
                ...state,
                extrabed: action.payload
            }
            break;
        case 'SET_ROOMNAME':
            state = {
                ...state,
                roomname: action.payload
            }
            break;
        case 'SET_ROOM_PRICE':
            state = {
                ...state,
                priceofroom: action.payload
            }
            break;
        case 'SET_ACTIVITYNAME':
            state = {
                ...state,
                activityname: action.payload
            }
            break;
        case 'SET_ACTIVITY_PRICE':
            state = {
                ...state,
                priceofactivty: action.payload
            }
            break;
        case 'SET_EVENTNAME':
            state = {
                ...state,
                eventname: action.payload
            }
            break;
        case 'SET_EVENT_PRICE':
            state = {
                ...state,
                priceofevent: action.payload
            }
            break;
        case 'SET_TOTALS':
            state = {
                ...state,
                totals: action.payload
            }
            break;
        case 'SET_USERNAME':
            state = {
                ...state,
                username: action.payload
            }
            break;
        case 'SET_EVENT_AMOUNT':
            state = {
                ...state,
                eventamount: action.payload
            }
            break;
        case 'SET_ACTIVITY_AMOUNT':
            state = {
                ...state,
                activityamount: action.payload
            }
            break;
        case 'SET_BILL_STATUS':
            state = {
                ...state,
                billstatus: action.payload
            }
            break;
    }
    return state;
    state.lastValue.push(action.payload)
}

export default Reservations