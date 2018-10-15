import React, { Component } from 'react';
import {connect} from 'react-redux'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate';
import Reservationbean from '../../../Models/Reservationbean'
import * as firebase from 'firebase'

class MemberReservationTableList extends Component{
    state={
        selectBill : null
    }
    componentDidMount=()=>{
        this.handlerGetValue()
    }
    hanlerSelect=(event)=>{
        this.setState({
            selectBill : event.target.value
        })
        this.props.setID(this.props.ID)
        this.props.setBillStatus(event.target.value)
        if(this.props.Activityname!==undefined){
            this.props.setActivityname(this.props.Activityname)
        }
        if(this.props.Eventname!==undefined){
            this.props.setEventname(this.props.Eventname)
        }      
    }
    handlerGetValue=()=>{
        this.setState({
            selectBill : this.props.Status
        })
    }
    handlerRemoveValueFromDatabase=()=>{
        firebase.database().ref('Reservation/'+this.props.ID).remove()
        firebase.database().ref('RoomReservation/'+this.props.ID).remove()
        firebase.database().ref('ActivityReservation/'+this.props.ID).remove()
        firebase.database().ref('EventReservation/'+this.props.ID).remove()
    }
    render(){
        let CheckDisable = null
        if(this.props.member.typemember === "Member"){
            CheckDisable = true
        }
        if(this.props.member.typemember === "Admin" ){
            CheckDisable = false

        }if(this.props.Status === "Paied"){
            CheckDisable = true
        }
        return(
            <tr>
                <th scope="row">{this.props.ID}</th>
                <td>{this.props.Checkin}</td>
                <td>{this.props.Checkout}</td>
                <td>{this.props.Roomname}</td>
                <td>{this.props.Activityname}</td>
                <td>{this.props.Eventname}</td>
                <td>{this.props.Username}</td>
                <td>{this.props.Totals}</td>
                <td> 
                    <select className="form-control" value={this.state.selectBill} onChange={this.hanlerSelect} disabled={CheckDisable}>
                        <option >Not Paied</option>
                        <option>Paied</option>
                    </select></td>
                    <td>{this.props.Paymentdate}</td>

                <td>
                    <button type="button" className="close center" aria-label="Close" onClick={this.handlerRemoveValueFromDatabase}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </td>
            </tr>
        )
    }
}

export default connect(mapStateToProps,Reservationbean) (MemberReservationTableList)