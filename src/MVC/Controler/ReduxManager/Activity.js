const Activity = (state = {
    id: null,
    activityname: null,
    price: null,
    description: null,
    categolry: null,
    images: null
}, action) => {
    switch (action.type) {
        case 'SET_ACTIVITY_ID':
            state = {
                ...state,
                id: action.payload
            }
            break;
        case 'SET_ACTIVITYNAME':
            state = {
                ...state,
                activityname: action.payload
            }
            break;
        case 'SET_ACTIVITY_DESCRIPTION':
            state = {
                ...state,
                description: action.payload
            }
            break;
        case 'SET_ACTIVITY_PRICE':
            state = {
                ...state,
                price: action.payload
            }
            break;
        case 'SET_ACTIVITY_CATEGOLRY':
            state = {
                ...state,
                categolry: action.payload
            }
            break;
        case 'SET_ACTIVITY_IMAGES':
            state = {
                ...state,
                images: action.payload
            }
            break;
    }
    return state;
    state.lastValue.push(action.payload)
}
export default Activity