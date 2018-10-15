import React, { Component } from 'react';
import MemberReservationTableList from '../../../Controler/Controller/ControllerTableList/ControllerTableList'
import {connect} from 'react-redux'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate';
class MemberTableView extends Component{
    render(){
        let View = null
        if(this.props.login.username!==null){
            View = <div>
            <h4 className="text-left"></h4>
            <MemberReservationTableList/>
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

export default connect(mapStateToProps) (MemberTableView)