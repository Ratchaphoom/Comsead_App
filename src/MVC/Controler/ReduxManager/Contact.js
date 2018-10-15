const Contact = (state = {
    id: null,
    name: null,
    email: null,
    phone: null,
    message: null,
}, action) => {
    switch (action.type) {
        case 'SET_CONTACT_ID':
            state = {
                ...state,
                id: action.payload
            }
            break;
            
        case 'SET_CONTACTNAME':
            state = {
                ...state,
                name: action.payload
            }
            break;

        case 'SET_CONTACT_EMAIL':
            state = {
                ...state,
                email: action.payload
            }
            break;

        case 'SET_CONTACT_PHONE':
            state = {
                ...state,
                phone: action.payload
            }
            break;

        case 'SET_CONTACT_MESSAGE':
            state = {
                ...state,
                message: action.payload
            }
            break;
    }
    return state;
    state.lastValue.push(action.payload)
}
export default Contact