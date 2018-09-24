import React, { Component } from 'react';
import * as firebase from 'firebase'
import EventManager from '../../../Manager/EventsManager'

class EventList extends Component{
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
                <EventManager eventList={this.state.eventList} status={this.props.status}/>
            </div>
        )
    }
}

export default EventList