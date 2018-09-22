import React, { Component } from 'react';
import * as firebase from 'firebase'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
 class User extends Component {
   componentDidMount=()=>{
    
   }
     hanlerdeleteUser=()=>{
        if(this.props.Status!=="Admin"){
            firebase.database().ref('Register/Member/'+this.props.Username).remove()
        }
     }
     hanlersetUser=()=>{
         this.props.setStatususer(this.props.Username)
     }
    render(){
      let disablecheck = false
      if(this.props.Status ==="Admin"){
        disablecheck = true
      }
        return(
                <div className="card example z-depth-3" data-aos="zoom-in">
                    <img className="img-fluid hoverable hoverable" src={this.props.Picture} style={{width : "100%"}} alt="Card image cap" />
                    <div className="card-body">
                    <h5 className="card-title">{this.props.Name}</h5>
                    <p className="card-text">{this.props.Status}</p>
                    <div className="container">
                    <div className="row">
                            <div className="col">
                            <NavLink exact to="/Viewprofiles"><button  type="button" className="btn btn-success" onClick={this.hanlersetUser} style={{width : "100%"}}>View</button></NavLink>
                            </div>
                            <div className="col">  
                            <button type="button" className="btn btn-danger" style={{width: "fit-content"}} onClick={this.hanlerdeleteUser} style={{width : "100%"}} disabled={disablecheck}>
                                    Delete
                            </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
        )
    }
 }
const mapStateToProps = (state) => {
    return {
      user : state.user,
      statususer : state.statususer
    }
  }
const mapDispathToProps = (dispath) => {
    return {
      setStatususer: (username) => {
        dispath({
          type: 'SET_STATUS_USER',
          payload: username
        })
      }
    }
  }
 export default connect(mapStateToProps,mapDispathToProps)(User)