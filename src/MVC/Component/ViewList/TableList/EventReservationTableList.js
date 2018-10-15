import React, { Component } from 'react';
import {connect} from 'react-redux'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate';
import Reservationbean from '../../../Models/Reservationbean'
import * as firebase from 'firebase'

class EventReservationTableList extends Component{
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
                <td>{this.props.Eventname}</td>
                <td>{this.props.Username}</td>
                <td>{this.props.Totals}</td>
                <td> 
                    <select className="form-control" value={this.state.selectBill} onChange={this.hanlerSelect} disabled={CheckDisable}>
                        <option >Not Paied</option>
                        <option>Paied</option>
                    </select></td>
                <td>
                    <button type="button" className="close center" aria-label="Close" onClick={this.handlerRemoveValueFromDatabase}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </td>
            </tr>
        )
    }
}

export default connect(mapStateToProps,Reservationbean) (EventReservationTableList)