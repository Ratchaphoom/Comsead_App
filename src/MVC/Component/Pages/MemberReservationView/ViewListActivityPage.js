import React,{Component} from 'react'
import ActivitiesList from '../../../Controler/Controller/ControllerActivityList/ActivityList'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate'
import {connect} from 'react-redux'
class MemberActivityView extends Component{
    render(){
        let View = null
        View = <div><ActivitiesList status={"View"}/></div>
        
        return(
            <div className="container">
            <div class="row">
                <div class="col-12 col-md-8"><h1 className="text-left" style={{fontSize:"60px",width:"fit-content"}}>Activity Collection<br/></h1></div>
                </div>
                <hr style={{height:"2px",backgroundColor : "#2E2E2E"}}/>
                {View}
            </div>
        );
    }
}

export default connect(mapStateToProps) (MemberActivityView)
