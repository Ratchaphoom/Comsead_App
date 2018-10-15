import React,{Component} from 'react'
import ControllerContactList from '../../../Controler/Controller/ControllerContactList/ControllerContactList'
class ContactListView extends Component{
    render(){
        return(
            <div className="container">
             <h1 className="text-left mb-3">Contact Comsaed</h1>
                <hr style={{height:"2px",backgroundColor : "#2E2E2E"}}/>
                <ControllerContactList/>
            </div>
        )
    }
}

export default ContactListView