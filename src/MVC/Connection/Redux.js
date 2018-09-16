import {Router} from 'react-router-redux'
import * as redux from 'redux'
import logger from 'redux-logger'




// Redux logger//
const mylongger = (store) => (next) => (action) =>{
    console.log("Logged Action",action);
    next(action);
}