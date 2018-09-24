import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as firebase from 'firebase'
import ActivitiesManager from '../../../../MVC/Manager/ActivitiesManager'

class ActivityList extends Component{
    state={
        activityList : []
    }
    componentDidUpdate=()=>{
        firebase.database().ref('ActivityDB/').once('value').then((snapshort)=>{
            var items = []
            let activityList = []
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                items.push(childData)
            })
            var rooms = Object.keys(items)
            for(var i=0;i<rooms.length;i++){
                let k = rooms[i]
                activityList.push({
                    ...items[k]
                })
            }
            this.setState({
                activityList : activityList
              })
        })
    }
    componentDidMount=()=>{
        firebase.database().ref('ActivityDB/').once('value').then((snapshort)=>{
            var items = []
            let activityList = []
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                items.push(childData)
            })
            var rooms = Object.keys(items)
            for(var i=0;i<rooms.length;i++){
                let k = rooms[i]
                activityList.push({
                    ...items[k]
                })
            }
            this.setState({
                activityList : activityList
              })
        })
    }
    render(){
        
        return(
            <div className="container">
                <ActivitiesManager activityList={this.state.activityList} status={this.props.status}/>
            </div>
        )
    }
}

export default ActivityList