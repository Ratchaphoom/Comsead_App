import React, { Component } from 'react';
import EventList from '../../../Controler/Controller/ControllerEventList/EventList'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

class EventReservationView extends Component{
    render(){
        let View = null
        if(this.props.reservation.checkin!==null&&this.props.reservation.checkout!==null){
            View = <EventList status="Reservation"/>
        }
        return(
            <div className="container">
             <div class="row">
                <div class="col-12 col-md-8"><h1 className="text-left" style={{fontSize:"60px",width:"fit-content"}}>Event Collection<br/></h1></div>
                <div class="col-6 col-md-4"><div style={{float:"right"}}><NavLink exact to="/Bill"><button type="button" className="btn btn-warning btn-lg">Skip this page</button></NavLink></div></div>
                </div>
                <hr style={{height:"2px",backgroundColor : "#2E2E2E"}}/>
                {View}
                <hr style={{height:"2px",backgroundColor : "#2E2E2E"}}/>
                <div class="row">
                <div class="col-12 col-md-8"></div>
                <div class="col-6 col-md-4"><div style={{float:"right"}}><NavLink exact to="/Bill"><button type="button" className="btn btn-warning btn-lg">Skip this page</button></NavLink></div></div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(EventReservationView)