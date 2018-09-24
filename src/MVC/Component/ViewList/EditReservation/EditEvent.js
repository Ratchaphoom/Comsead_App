import React,{Component} from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate'
import Eventbean from '../../../Models/Eventbean'

class EditEvent extends Component{
    handlerSetIdtoProp=()=>{
        this.props.setId(this.props.ID)
    }
    render(){
        return(
        <div className="card example z-depth-3" style={{borderRadius : "3%"}} data-aos="zoom-in">
            <img className="img-fluid hoverable" style={{borderRadius : "3%"}} src={this.props.Picture} width="500" height="300" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">{this.props.Eventname}</h5>
            <p className="card-text">{this.props.Details}</p>
            <p className="card-text">Price : {this.props.Price}</p>
            <div className="conrainer">
                    <div className="row">
                        <div class="col">
                            <NavLink exact to="/EditReservationEvent"><button type="button" class="btn btn-success" onClick={this.handlerSetIdtoProp}>Edit</button></NavLink>
                                </div>         
                        </div>
                    </div>
            </div>
        </div>
        )
    }
}

export default connect(mapStateToProps,Eventbean) (EditEvent)