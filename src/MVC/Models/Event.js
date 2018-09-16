const Events =(state={
    id : null,
    eventname : null,
    price : null,
    description : null
},action)=>{
    switch(action.type){
        case 'SET_EVENT_ID' : state={
            ...state,
            id : action.payload
        }
        break;
        case 'SET_EVENTNAME' : state={
            ...state,
            eventname : action.payload
        }
        break;
        case 'SET_DESCRIPTION' : state={
            ...state,
            description : action.payload
        }
        break;
        case 'SET_PRICE' : state={
            ...state,
            price : action.payload
        }
        break;
    }
    return state;
    state.lastValue.push(action.payload)
}
export default Events