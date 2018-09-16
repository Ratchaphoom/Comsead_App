const Userreducer = (state= {
    username : null,
    password : null,
    picture : null,
    status : null,
    address : null,
    phone : null,
    email : null
},action) =>{
    switch (action.type){
        case "SET_USERNAME" : state = {
                ...state,
               username : action.payload
        }
        break;
        case "SET_PASSWORD" : state = {
            ...state,
            password : action.payload
    }
        break;
        case "SET_PICTURE" : state = {
            ...state,
            picture : action.payload
    }
        break;
        case "SET_STATUS" : state = {
            ...state,
            status : action.payload
    }
        break;
        case "SET_EMAIL" : state = {
            ...state,
            email : action.payload

    }
        break;
        case "SET_PHONE" : state = {
            ...state,
            phone : action.payload

    }
    break;
    }
    return state;
    state.lastValue.push(action.payload)
};

export default Userreducer