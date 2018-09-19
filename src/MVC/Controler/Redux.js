
import logger from 'redux-logger'


import {createStore, combineReducers, applyMiddleware} from 'redux'



//Import Redux Connection
import Members from './Connection_Redux/Members'
import Login from './Connection_Redux/Login'
import Events from './Connection_Redux/Event'
import Activity from './Connection_Redux/Activity'
import Room from './Connection_Redux/Room'
import Reservation from './Connection_Redux/Reservation'



// Redux logger//
const mylongger = (store) => (next) => (action) => {
    console.log("Logged Action", action);
    next(action);
}


// Store 
const store = createStore(combineReducers({
        Members,
        Reservation,
        Login,
        Room,
        Activity,
        Events
    }), {}, applyMiddleware(mylongger, logger)
);
export default store