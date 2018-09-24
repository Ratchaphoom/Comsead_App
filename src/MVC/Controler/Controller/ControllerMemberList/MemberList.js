import React, { Component } from 'react';
import * as firebase from 'firebase'
import Users from '../../../Manager/Users'

 class UserList extends Component{
     state = {
         userList : []
     } 
     componentDidUpdate=()=>{
        firebase.database().ref('Register/Member').once('value').then((snapshort) => {
            var items = []
            let userList = []
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                items.push(childData)
            })
            var user = Object.keys(items)
            for (var i = 0; i < user.length; i++) {
                let k = user[i]
                userList.push({
                    ...items[k]
                });
                }
                this.setState({
                    userList : userList
                });
            });
     }
     componentDidMount=()=>{
        firebase.database().ref('Register/Member').once('value').then((snapshort) => {
            var items = []
            let userList = []
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                items.push(childData)
            })
            var user = Object.keys(items)
            for (var i = 0; i < user.length; i++) {
                let k = user[i]
                userList.push({
                    ...items[k]
                });
                }
                this.setState({
                    userList : userList
                });
            });
     }
     render(){
         return(
             <div className="container-fluid">
                 <Users userList={this.state.userList} />
             </div>
         )
     }
 }

 export default UserList