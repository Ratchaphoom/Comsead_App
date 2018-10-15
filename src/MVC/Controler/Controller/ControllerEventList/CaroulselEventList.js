import React, { Component } from 'react';
import * as firebase from 'firebase'
import CaroulselEventManager from '../../../Manager/CaroulselEventManager'

class CaroulselEventList extends Component{
    state={
        eventList : []
    }
    componentDidUpdate=()=>{
        firebase.database().ref('EventDB/').once('value').then((snapshort)=>{
            var items = []
            let eventList = []
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                items.push(childData)
            })
            var rooms = Object.keys(items)
            for(var i=0;i<rooms.length;i++){
                let k = rooms[i]
                eventList.push({
                    ...items[k]
                })
            }
            this.setState({
                eventList : eventList
              })
        })
    }
    componentDidMount=()=>{
        firebase.database().ref('EventDB/').once('value').then((snapshort)=>{
            var items = []
            let eventList = []
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                items.push(childData)
            })
            var rooms = Object.keys(items)
            for(var i=0;i<rooms.length;i++){
                let k = rooms[i]
                eventList.push({
                    ...items[k]
                })
            }
            this.setState({
                eventList : eventList
              })
        })
    }
    render(){
        return(
            <div className="container">
                <CaroulselEventManager eventList={this.state.eventList}/>
            </div>
        )
    }
}

export default CaroulselEventList