import React,{Component} from 'react'
import * as firebase from 'firebase'

class ContactViewList extends Component{
    handlerRemoveFromDataBase=()=>{
        firebase.database().ref('ContactDB/'+this.props.ID).remove()
    }
    render(){
        return(
            <div className="card border-success mb-3 shadow-lg" style={{maxWidth: "18rem"}} data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <div className="card-header bg-transparent border-success text-left">{this.props.DateofContact}</div>
            <div className="card-body text-success">
                <h5 className="card-title text-left">{this.props.Contactname}</h5>
                <p className="card-text text-left">{this.props.Contactmessage}</p>
            </div>
                <div className="card-footer bg-transparent border-success">
                <button type="button" className="btn btn-warning" onClick={this.handlerRemoveFromDataBase}>Remove</button>

                </div>
            </div>
        )
    }
}

export default ContactViewList