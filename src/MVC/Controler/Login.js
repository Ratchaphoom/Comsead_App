const Login = (state = {
    username: null,
    password: null,
    loginstatus: null,
}, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            state = {
                ...state,
                username: action.payload
            }
            break;
        case "SET_PASSWORD":
            state = {
                ...state,
                password: action.payload
            }
            break;
        case "LOGIN_STATUS":
            state = {
                ...state,
                loginstatus: action.payload
            }
            break;
    }
    return state;
    state.lastValue.push(action.payload)
};
export default Login