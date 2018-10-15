import React, { Component } from 'react';
import * as firebase from 'firebase'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import Roombean from '../../../Models/Roombean'
import mapStateToProp from '../../../Controler/Mapstate/Mapstate'
import ImageZoom from 'react-medium-image-zoom'

class RoomReservationList extends Component{
    
    handlerSetDataToProps=()=>{
        let sum = parseInt(this.props.Price*this.props.reservation.amountroom)
        this.props.setRoomName(this.props.Roomname)
        this.props.setPrice(sum)
    }
    render(){
        return(
            <div className="card border-success mb-3 shadow-lg" data-aos="fade-right" style={{width :"fit-content"}}>
            <div className="card-header bg-transparent border-success"> <div className=" text-left h2" style={{color:"#43a047"}}>{this.props.Roomname} </div></div>
            <div className="card-body">
            <div className="row">
                <div className="col-9 text-left h1" style={{color:"#007E33"}}></div>
                <div className="col-4"> <ImageZoom
                className="img-fluid hoverable"
                image={{
                src: this.props.Picture,
                alt: 'Golden Gate Bridge',
                className: 'img',
                style: { width: '350px',height:"250px", borderRadius : "3%"}
                }}
                zoomImage={{
                src: this.props.Picture,
                alt: 'Golden Gate Bridge'
                }}
                /></div>
                <div className="col-6 text-left" ><div className="h4" style={{paddingLeft:"30px"}}>{this.props.Roomname}-{"("}{this.props.Categolry}{")"}</div>
                <br/><div className="multi-collapse" id="multiCollapseExample2" style={{paddingLeft:"30px"}}>{this.props.Details}</div>
                <br/><br/>  
                </div>
            </div>
            </div>
            <div className="card-footer bg-transparent border-success">
            <div className="row float-right">
                            <div className="col-auto"><div className="h3">{this.props.Price} THB </div></div>
                            <div className="col-auto"><button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">SHOW ME..</button></div>
                            <div className="col-auto"><NavLink exact to="/ReservationActivity"><button type="button" className="btn btn-warning" onClick={this.handlerSetDataToProps}>BOOK</button></NavLink></div>
            </div>
            </div>
            </div>
        );
    }
}

export default connect(mapStateToProp,Roombean) (RoomReservationList)