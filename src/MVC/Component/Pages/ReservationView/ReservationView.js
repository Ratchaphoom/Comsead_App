import React, { Component } from 'react';
import RoomList from '../../../Controler/Controller/ControllerRoomList/RoomList'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate'
import Reservationbean from '../../../Models/Reservationbean'
import {connect} from 'react-redux'

class ReservationView extends Component{
    render(){
        let View = null
        if(this.props.reservation.checkin!==null&&this.props.reservation.checkout!==null){
            View = <RoomList status="Reservation"/>
        }
        return(
            <div className="container">
                <h1 className="text-left" style={{fontSize:"60px",width:"fit-content"}}>Room Collection</h1>
                <hr style={{height:"2px",backgroundColor : "#2E2E2E"}}/>
                {View}
            </div>
        )
    }
}

export default connect(mapStateToProps)(ReservationView)