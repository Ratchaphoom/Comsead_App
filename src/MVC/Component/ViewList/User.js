import React, { Component } from 'react';
import * as firebase from 'firebase'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import mapStateToProps from '../../Controler/Mapstate/Mapstate'
import Login from '../../Models/Loginbean'
 class User extends Component {
     hanlerdeleteUser=()=>{
        return  firebase.database().ref('Register/Member/'+this.props.Username).remove();
     }
     hanlersetUser=()=>{
         this.props.setLoginStatus(this.props.Username)
     }
    render(){
      let disablecheck = false
      if(this.props.Status ==="Admin"){
        disablecheck = true
      }
        return(
                <div>
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
                            <button type="button" className="btn btn-danger" style={{width: "fit-content"}} style={{width : "100%"}} disabled={disablecheck} onClick={this.hanlerdeleteUser}>
                                    Delete
                            </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
        )
    }
 }
 export default connect(mapStateToProps,Login)(User)