const Activity =(state={
    id : null,
    activityname : null,
    price : null,
    description : null
},action)=>{
    switch(action.type){
        case 'SET_ACTIVITY_ID' : state={
            ...state,
            id : action.payload
        }
        break;
        case 'SET_ACTIVITYNAME' : state={
            ...state,
            activityname : action.payload
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
export default Activity