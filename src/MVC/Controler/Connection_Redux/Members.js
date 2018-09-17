const Userreducer = (state = {
    id: null,
    name: null,
    picture: null,
    typemember: null,
    address: null,
    phone: null,
    email: null,
    name: null,
    lastname: null,
}, action) => {
    switch (action.type) {
        case "SET_ID":
            state = {
                ...state,
                id: action.payload
            }
            break;
        case "SET_PICTURE":
            state = {
                ...state,
                picture: action.payload
            }
            break;
        case "SET_TYPEMEMBER":
            state = {
                ...state,
                typemember: action.payload
            }
            break;
        case "SET_EMAIL":
            state = {
                ...state,
                email: action.payload

            }
            break;
        case "SET_PHONE":
            state = {
                ...state,
                phone: action.payload
            }
            break;
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "SET_LASTNAME":
            state = {
                ...state,
                lastname: action.payload
            }
            break;
    }
    return state;
    state.lastValue.push(action.payload)
};

export default Userreducer