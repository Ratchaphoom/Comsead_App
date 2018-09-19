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
import Store from '../src/MVC/Controler/Redux'
import * as firebase from 'firebase'


// const mylongger = (store) => (next) => (action) =>{
//     console.log("Logged Action",action);
//     next(action);
// }

// firebase
const config = {
    apiKey: "AIzaSyAVeePOF1l-y6an6_Fcr6YoVK3-QleBqjk",
    authDomain: "comseadreact.firebaseapp.com",
    databaseURL: "https://comseadreact.firebaseio.com",
    projectId: "comseadreact",
    storageBucket: "comseadreact.appspot.com",
    messagingSenderId: "843346359196"
  };
  firebase.initializeApp(config);

//Browerrouter & Reduxrouter
  ReactDOM.render(
    <BrowserRouter>
        <Provider store={Store}>
        <App/>
        </Provider> 
    </BrowserRouter> ,
    document.getElementById('root'));
registerServiceWorker();