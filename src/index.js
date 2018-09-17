import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
// import {Router} from 'react-router-redux'
// import {createStore, combineReducers, applyMiddleware,} from 'redux'
// import logger from 'redux-logger'
import {Provider} from 'react-redux'
import Config from '../src/MVC/Controler/Firebase'
import Store from '../src/MVC/Controler/Redux'


// const mylongger = (store) => (next) => (action) =>{
//     console.log("Logged Action",action);
//     next(action);
// }

// firebase
Config

//Browerrouter & Reduxrouter
  ReactDOM.render(
    <BrowserRouter>
        <Provider store={Store}>
        <App/>
        </Provider> 
    </BrowserRouter> ,
    document.getElementById('root'));
registerServiceWorker();