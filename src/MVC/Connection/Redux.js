import {Router} from 'react-router-redux'
import * as redux from 'redux'
import logger from 'redux-logger'


// Redux logger//
const mylongger = (store) => (next) => (action) =>{
    console.log("Logged Action",action);
    next(action);
}
 // Store 
const store = createStore(combineReducers({user : Userreducer,status: StatusLogger,statususer : StatusUser,reservationroom : ReservationRoom,login : Login})
,{}
,applyMiddleware(mylongger,logger)

);