import React, { Component } from 'react';
import RoomManager from '../../../Manager/RoomsManager'
import * as firebase from 'firebase'

class RoomList extends Component{
    state={
        roomList : []
    }
   
    componentDidMount=()=>{
        firebase.database().ref('RoomDB/').once('value').then((snapshort)=>{
            var items = []
            let roomList = []
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                items.push(childData)
            })
            var rooms = Object.keys(items)
            for(var i=0;i<rooms.length;i++){
                let k = rooms[i]
                roomList.push({
                    ...items[k]
                })
            }
            this.setState({
                roomList : roomList
              })
        })
    }
    componentDidMount=()=>{
        firebase.database().ref('RoomDB/').once('value').then((snapshort)=>{
            var items = []
            let roomList = []
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                items.push(childData)
            })
            var rooms = Object.keys(items)
            for(var i=0;i<rooms.length;i++){
                let k = rooms[i]
                roomList.push({
                    ...items[k]
                })
            }
            this.setState({
                roomList : roomList
              })
        })
    }
    render(){
        return(
            <div className="container">
                <RoomManager roomList={this.state.roomList} status={this.props.status} namepage={this.props.namepage}/>
            </div>
        )
    }
}

export default RoomList