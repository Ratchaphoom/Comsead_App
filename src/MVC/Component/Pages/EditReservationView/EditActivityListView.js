import React,{Component} from 'react'
import ActivitiesList from '../../../Controler/Controller/ControllerActivityList/ActivityList'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
class EditReservationView extends Component{
    render(){
        let View = null
        if(this.props.login.username === null){
            View = <div></div>
        }
        if(this.props.login.username !== null){
            View = <div><ActivitiesList status={"Edit"}/></div>
        }
        return(
            <div className="container">
                {View}
            </div>
        );
    }
}

export default connect(mapStateToProps) (EditReservationView)