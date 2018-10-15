import React, { Component } from 'react';
import ControllerEventTableList from '../../../Controler/Controller/ControllerTableList/ControllerEventTableList'
import {connect} from 'react-redux'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate';
class EventTableView extends Component{
    render(){
        let View = null
        if(this.props.login.username!==null){
            View = <div>
            <h4 className="text-left">Reservation Member List</h4>
            <ControllerEventTableList/>
            </div>
        }if(this.props.login.username===null){
            View = <div></div>
        }
        return(
            <div className="container-fluid" style={{paddingTop:"30px"}}>
                {View}
            </div>
        );
    }
}

export default connect(mapStateToProps) (EventTableView)