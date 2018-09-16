const ReservationRoom =(state={
    id : null,
    count : null,
    username : null,
    checkin : null,
    checkout : null,
    amountroom : null,
    extrabed : null,
    roomname : null,
    priceofroom : null,
    activityname : null,
    priceofactivty : null,
    eventname : null,
    priceofevent : null,
    totals : null,
    payment : null,
    paymentuser : null,
    totalslist : null,
    amountlist : null,
    paymentdate : null,
    paymentyear : null,
    paymentmonth : null,
    paymentroom : null,
    paymentamountroom : null
},action)=>{
  
    switch(action.type){
        case 'SET_PAYMENT_AMOUNT_ROOM' : state={
            ...state,
            paymentamountroom : action.payload
        }
        break;
        case 'SET_PAYMENT_ROOM' : state={
            ...state,
            paymentroom : action.payload
        }
        break;
        case 'SET_PAYMENT_DATE' : state={
            ...state,
            paymentdate : action.payload
        }
        break;
        case 'SET_PAYMENT_MONTH' : state={
            ...state,
            paymentmonth : action.payload
        }
        break;
        case 'SET_PAYMENT_YEAR' : state={
            ...state,
            paymentyear : action.payload
        }
        break;
        case 'SET_AMOUNT_LIST' : state={
            ...state,
            amountlist : action.payload
        }
        break;
        case 'SET_TOTAL_LIST' : state={
            ...state,
            totalslist : action.payload
        }
        break;
        case 'SET_PAYMENT_USER' : state={
            ...state,
            paymentuser : action.payload
        }
        break;
        case 'SET_PAYMENT' : state={
            ...state,
            payment : action.payload
        }
        break;
        case 'SET_ID' : state={
            ...state,
            id : action.payload
        }
        break;
        case 'SET_COUNT' : state={
            ...state,
            count : action.payload
        }
        break;
        case 'SET_CHECKIN' : state={
            ...state,
            checkin : action.payload
        }
        break;
        case 'SET_CHECKOUT' : state={
            ...state,
            checkout : action.payload
        }
        break;
        case 'SET_AMOUNT_ROOM' : state={
            ...state,
            amountroom : action.payload
        }
        break;
        case 'SET_EXTRABED' : state={
            ...state,
            extrabed : action.payload
        }
        break;
        case 'SET_ROOMNAME' : state={
            ...state,
            roomname : action.payload
        }
        break;
        case 'SET_PRICE_OF_ROOM' : state={
            ...state,
            priceofroom : action.payload
        }
        break;
        case 'SET_ACTIVITYNAME' : state={
            ...state,
            activityname : action.payload
        }
        break;
        case 'SET_PRICE_OF_ACTIVITY' : state={
            ...state,
            priceofactivty : action.payload
        }
        break;
        case 'SET_EVENTNAME' : state={
            ...state,
            eventname : action.payload
        }
        break;
        case 'SET_PRICE_OF_EVENT' : state={
            ...state,
            priceofevent : action.payload
        }
        break;
        case 'SET_TOTALS' : state={
            ...state,
            totals : action.payload
        }
        break;
        case 'SET_USERNAME' : state={
            ...state,
            username : action.payload
        }
        break;
    }
    return state;
    state.lastValue.push(action.payload)
}