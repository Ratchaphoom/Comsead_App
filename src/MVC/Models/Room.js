const Room =(state={
    id : null,
    roomname : null,
    price : null,
    description : null
},action)=>{
    switch(action.type){
        case 'SET_ROOM_ID' : state={
            ...state,
            id : action.payload
        }
        break;
        case 'SET_ROOMNAME' : state={
            ...state,
            roomname : action.payload
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
export default Room