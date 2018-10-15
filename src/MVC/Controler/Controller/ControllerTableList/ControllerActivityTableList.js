import React, { Component } from 'react';
import ActivityReservationTableList from '../../../Manager/ActivityReservationTableList'
import MapStateToProps from '../../Mapstate/Mapstate'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
import mapStateToProps from '../../Mapstate/Mapstate';

class ReservationList extends Component{
    state={
        reservationlist : [],
        Totals : 0,
        Amount : null,
    }
    componentDidMount=()=>{
        firebase.database().ref('ActivityReservation/').once('value').then((snapshort)=>{
            var items = []
            let reservationlist = []
            let sum = 0
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                items.push(childData)
            })
            var rooms = Object.keys(items)
            for(var i=0;i<rooms.length;i++){
                let k = rooms[i]
                    if(items[k].Status==="Paied"){
                        sum = sum+parseInt(items[k].PriceofActivity)
                    }
                   
                    reservationlist.push({
                        ...items[k]
                    })
            }
            this.setState({
                reservationlist : reservationlist.reverse(),
                Totals : sum
              })
        })
    }
    componentDidUpdate=()=>{
        firebase.database().ref('ActivityReservation/').once('value').then((snapshort)=>{
            var items = []
            let reservationlist = []
            let sum = 0
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                items.push(childData)
            })
            var rooms = Object.keys(items)
            for(var i=0;i<rooms.length;i++){
                let k = rooms[i]
                if(items[k].Status==="Paied"){
                    sum = sum+parseInt(items[k].PriceofActivity)
                }
                reservationlist.push({
                    ...items[k]
                })
            }
            this.setState({
                reservationlist : reservationlist.reverse(),
                Totals : sum
              })
        })
    }
    
    render(){
       
        return(
            <div className="container-fluid">
                <ActivityReservationTableList reservationlist={this.state.reservationlist} sum={this.state.Totals}/>
            </div>
        )
    }
}

export default connect(mapStateToProps) (ReservationList)