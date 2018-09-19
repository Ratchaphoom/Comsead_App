
import logger from 'redux-logger'


import {createStore, combineReducers, applyMiddleware} from 'redux'



//Import Redux Connection
import Members from './ReduxManager/Members'
import Login from './ReduxManager/Login'
import Events from './ReduxManager/Event'
import Activity from './ReduxManager/Activity'
import Room from './ReduxManager/Room'
import Reservation from './ReduxManager/Reservation'



// Redux logger//
const mylongger = (store) => (next) => (action) => {
    console.log("Logged Action", action);
    next(action);
}


// Store 
const store = createStore(combineReducers({
        member : Members,
        reservation : Reservation,
        login : Login,
        room :Room,
        activity : Activity,
        event :Events
    }), {}, applyMiddleware(mylongger, logger)
);
export default store