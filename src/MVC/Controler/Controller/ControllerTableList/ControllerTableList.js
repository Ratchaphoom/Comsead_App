import React, { Component } from 'react';
import MemberReservationTableList from '../../../Manager/MemberReservationTableList'
import MapStateToProps from '../../Mapstate/Mapstate'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
import mapStateToProps from '../../Mapstate/Mapstate';

class ReservationList extends Component{
    state={
        reservationlist : [],
        Totals : 0,
        Amount : null,
        TotalsMember : 0
    }
    componentDidMount=()=>{
        firebase.database().ref('Reservation/').once('value').then((snapshort)=>{
            var items = []
            let reservationlist = []
            let sum = 0
            let usersum = 0
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                items.push(childData)
            })
            var rooms = Object.keys(items)
            for(var i=0;i<rooms.length;i++){
                let k = rooms[i]
                    if(items[k].Status==="Paied"){
                        sum = sum+parseInt(items[k].Totals)
                    }
                    if(items[k].Username===this.props.login.username&&items[k].Status==="Paied"){
                        usersum = usersum+parseInt(items[k].Totals)
                    }
                    reservationlist.push({
                        ...items[k]
                    })
            }
            this.setState({
                reservationlist : reservationlist.reverse(),
                Totals : sum,
                TotalsMember : usersum
              })
        })
    }
    componentDidUpdate=()=>{
        firebase.database().ref('Reservation/').once('value').then((snapshort)=>{
            var items = []
            let reservationlist = []
            let sum = 0
            let usersum = 0
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                items.push(childData)
            })
            var rooms = Object.keys(items)
            for(var i=0;i<rooms.length;i++){
                let k = rooms[i]
                if(items[k].Status==="Paied"){
                    sum = sum+parseInt(items[k].Totals)
                }if(items[k].Username===this.props.login.username&&items[k].Status==="Paied"){
                    usersum = usersum+parseInt(items[k].Totals)
                }
                reservationlist.push({
                    ...items[k]
                })
            }
            this.setState({
                reservationlist : reservationlist.reverse(),
                Totals : sum,
                TotalsMember : usersum
              })
        })
    }
    
    render(){
       
        return(
            <div className="container-fluid">
                <MemberReservationTableList reservationlist={this.state.reservationlist} sum={this.state.Totals} usersum={this.state.TotalsMember}/>
            </div>
        )
    }
}

export default connect(mapStateToProps) (ReservationList)