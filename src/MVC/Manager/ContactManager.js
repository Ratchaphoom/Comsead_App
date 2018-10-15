import React,{Component} from 'react'
import MapStatToProps from '../../MVC/Controler/Mapstate/Mapstate'
import {connect} from 'react-redux'
import ContactViewList from '../Component/ViewList/ContactViewList'
class ContactManager extends Component{
    render(){
        let fillteredContract = null
        let View = null
        return(
            <div className="container">
                <div className="card shadow-lg">
                    <div className="card-body"> 
                        <div className="card-columns">
                            {
                                this.props.contactList.map(card=>{
                                    return <ContactViewList
                                        ID = {card.ID}
                                        Contactname = {card.Contactname}
                                        Contactemail = {card.Contactemail}
                                        Contactphone = {card.Contactphone}
                                        Contactmessage = {card.Contactmessage}
                                        DateofContact = {card.DateofContact} 
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default connect(MapStatToProps) (ContactManager)