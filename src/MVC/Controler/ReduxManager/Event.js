const Events = (state = {
    id: null,
    eventname: null,
    price: null,
    description: null,
    categolry: null,
    images: null,
    amount: null
}, action) => {
    switch (action.type) {
        case 'SET_EVENT_ID':
            state = {
                ...state,
                id: action.payload
            }
            break;
        case 'SET_EVENTNAME':
            state = {
                ...state,
                eventname: action.payload
            }
            break;
        case 'SET_EVENT_DESCRIPTION':
            state = {
                ...state,
                description: action.payload
            }
            break;
        case 'SET_EVENT_PRICE':
            state = {
                ...state,
                price: action.payload
            }
            break;
        case 'SET_EVENT_CATEGOLRY':
            state = {
                ...state,
                categolry: action.payload
            }
            break;
        case 'SET_EVENT_IMAGES':
            state = {
                ...state,
                images: action.payload
            }
            break;
        case 'SET_EVENT_AMOUNT':
            state = {
                ...state,
                amount: action.payload
            }
            break;
    }
    return state;
    state.lastValue.push(action.payload)
}
export default Events