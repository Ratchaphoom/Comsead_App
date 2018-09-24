const Room = (state = {
    id: null,
    roomname: null,
    price: null,
    description: null,
    categolry: null,
    images: null,
    amount: null,
}, action) => {
    switch (action.type) {
        case 'SET_ROOM_ID':
            state = {
                ...state,
                id: action.payload
            }
            break;
        case 'SET_ROOMNAME':
            state = {
                ...state,
                roomname: action.payload
            }
            break;
        case 'SET_ROOM_DESCRIPTION':
            state = {
                ...state,
                description: action.payload
            }
            break;
        case 'SET_ROOM_PRICE':
            state = {
                ...state,
                price: action.payload
            }
            break;
        case 'SET_ROOM_CATEGOLRY':
            state = {
                ...state,
                categolry: action.payload
            }
            break;
        case 'SET_ROOM_IMAGES':
            state = {
                ...state,
                images: action.payload
            }
            break;
        case 'SET_AMOUNT':
            state = {
                ...state,
                amount: action.payload
            }
            break;
    }
    return state;
    state.lastValue.push(action.payload)
}
export default Room