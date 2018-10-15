import React,{Component} from 'react'
import RoomList from '../../../Controler/Controller/ControllerRoomList/RoomList'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
class MemberRoomListView extends Component{
    render(){
        let View = null
        View = <div><RoomList status={"View"}/></div>
        
        return(
            <div className="container">
                 <div class="row">
                <div class="col-12 col-md-8"><h1 className="text-left" style={{fontSize:"60px",width:"fit-content"}}>Room Collection<br/></h1></div>
                </div>
                <hr style={{height:"2px",backgroundColor : "#2E2E2E"}}/>
                {View}
            </div>
        );
    }
}

export default connect(mapStateToProps) (MemberRoomListView)