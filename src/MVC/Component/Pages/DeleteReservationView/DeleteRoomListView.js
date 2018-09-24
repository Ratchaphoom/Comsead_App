import React,{Component} from 'react'
import RoomList from '../../../Controler/Controller/ControllerRoomList/RoomList'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate'
import {connect} from 'react-redux'
class DeleteRoomView extends Component{
    render(){
        let View = null
        if(this.props.login.username === null){
            View = <div></div>
        }
        if(this.props.login.username !== null){
            View = <div><RoomList status={"Delete"}/></div>
        }
        return(
            <div className="container">
                {View}
            </div>
        );
    }
}

export default connect(mapStateToProps)(DeleteRoomView)