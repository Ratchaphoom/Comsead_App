import React, { Component } from 'react';
import RoomReservationTableList from '../../../Manager/RoomReservationTableList'
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
        firebase.database().ref('RoomReservation/').once('value').then((snapshort)=>{
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
                        sum = sum+parseInt(items[k].PriceofRoom)
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
        firebase.database().ref('RoomReservation/').once('value').then((snapshort)=>{
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
                    sum = sum+parseInt(items[k].PriceofRoom)
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
                <RoomReservationTableList reservationlist={this.state.reservationlist} sum={this.state.Totals}/>
            </div>
        )
    }
}

export default connect(mapStateToProps) (ReservationList)