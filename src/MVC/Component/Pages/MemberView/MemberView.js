import React,{Component} from 'react'
import MemberList from '../../../Controler/Controller/ControllerMemberList/MemberList'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate'
import {connect} from 'react-redux'

class MemberView extends Component{
   render(){
            let View = null
            if(this.props.login.username===null){
                View = <div></div>
            }if(this.props.login.username!==null){
                View = <MemberList/>
            }
       return(
            <div className="container">
                {View}
            </div>
       );
   }
}

export default connect(mapStateToProps)(MemberView)