import React,{Component} from 'react'
import RoomList from '../../../../Controler/Controller/ControllerRoomList/RoomList'
class RiverWing extends Component{
    render(){
        return(
            <div className="container">
             <div class="row">
                <div class="col-12 col-md-8"><h1 className="text-left" style={{fontSize:"60px",width:"fit-content"}}>Moutain View Wing<br/></h1></div>
                </div>
                <hr style={{height:"2px",backgroundColor : "#2E2E2E"}}/>
                <RoomList namepage="Mountain View Wing" status="View"></RoomList>
            </div>
        )
    }

}

export default RiverWing