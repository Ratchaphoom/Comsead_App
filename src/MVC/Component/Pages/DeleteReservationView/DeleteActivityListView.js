import React,{Component} from 'react'
import ActivitiesList from '../../../Controler/Controller/ControllerActivityList/ActivityList'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate'
import {connect} from 'react-redux'
class DeleteReservationView extends Component{
    render(){
        let View = null
        if(this.props.login.username === null){
            View = <div></div>
        }
        if(this.props.login.username !== null){
            View = <div><ActivitiesList status={"Delete"}/></div>
        }
        return(
            <div className="container">
                {View}
            </div>
        );
    }
}

export default connect(mapStateToProps)(DeleteReservationView)