import React,{Component} from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate'
import Roombean from '../../../Models/Roombean'

class EditRoom extends Component{
    handlerSetIdtoProp=()=>{
        this.props.setID(this.props.ID)
    }
    render(){
        return(
        <div className="card example z-depth-3" style={{borderRadius : "3%"}} data-aos="zoom-in">
            <img className="card-img-top hoverable" style={{borderRadius : "3%"}} src={this.props.Picture} width="350" height="200" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">{this.props.Roomname}</h5>
            <p className="card-text">{this.props.Categolry}</p>
            <p className="card-text">{this.props.Price}</p>
            <div className="conrainer">
                    <div className="row">
                        <div class="col">
                        <NavLink exact to='/EditReservationRoom'><button type="button" class="btn btn-success" onClick={this.handlerSetIdtoProp}>Edit</button></NavLink>
                                </div>     
                        </div>
                    </div>
            </div>
        </div>
        )
    }
}

export default connect(mapStateToProps,Roombean) (EditRoom)