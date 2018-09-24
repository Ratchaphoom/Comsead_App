import React,{Component} from 'react'
import EventsList from '../../../Controler/Controller/ControllerEventList/EventList'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
class EditEventView extends Component{
    render(){
        let View = null
        if(this.props.login.username === null){
            View = <div></div>
        }
        if(this.props.login.username !== null){
            View = <div><EventsList status={"Edit"}/></div>
        }
        return(
            <div className="container">
                {View}
            </div>
        );
    }
}

export default connect(mapStateToProps) (EditEventView)