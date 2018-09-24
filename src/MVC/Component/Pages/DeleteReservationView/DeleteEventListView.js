import React,{Component} from 'react'
import EventList from '../../../Controler/Controller/ControllerEventList/EventList'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate'
import {connect} from 'react-redux'
class DeleteEventView extends Component{
    render(){
        let View = null
        if(this.props.login.username === null){
            View = <div></div>
        }
        if(this.props.login.username !== null){
            View = <div><EventList status={"Delete"}/></div>
        }
        return(
            <div className="container">
                {View}
            </div>
        );
    }
}

export default connect(mapStateToProps)(DeleteEventView)