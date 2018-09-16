import * as firebase from 'firebase'

//Firebase Install//
const config = {
    apiKey: "AIzaSyAVeePOF1l-y6an6_Fcr6YoVK3-QleBqjk",
    authDomain: "comseadreact.firebaseapp.com",
    databaseURL: "https://comseadreact.firebaseio.com",
    projectId: "comseadreact",
    storageBucket: "comseadreact.appspot.com",
    messagingSenderId: "843346359196"
  };
  firebase.initializeApp(config);

  export default config
