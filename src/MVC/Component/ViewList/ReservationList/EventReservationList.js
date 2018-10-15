import React, { Component } from 'react';
import * as firebase from 'firebase'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import Eventbean from '../../../Models/Eventbean'
import mapStateToProp from '../../../Controler/Mapstate/Mapstate'
import ImageZoom from 'react-medium-image-zoom'

class EventReservationList extends Component{
    state={
        amount : 1,
        sum : 0
    }
    hanlerSetDataToProp=()=>{     
        let sum = parseInt(this.props.Price*this.state.amount)
        this.props.setEventname(this.props.Eventname) 
        this.props.setPrice(sum)
        this.props.setEventamount(this.state.amount)
    }
    handlerSetDataZeroToProps=()=>{
        this.props.setPrice(0)
    }
    handlerAmount=(event)=>{
        this.setState({
            amount : event.target.value
        });
    }
    render(){
        return(
            <div className="card border-success mb-3 shadow-lg" data-aos="fade-right">
            <div className="card-header bg-transparent border-success"> <div className=" text-left h2" style={{color:"#43a047"}}>{this.props.Eventname} </div></div>
            <div className="card-body">
            <div className="row">
                <div className="col-9 text-left h2" style={{color:"#007E33"}}></div>
                <div className="col-4"> 
                <ImageZoom
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
                />
                </div>
                <div className="col-6 text-left" ><div className="h4"  style={{paddingLeft:"30px"}}>{this.props.Eventname}</div>
                <br/><div className="multi-collapse" id="multiCollapseExample2"  style={{paddingLeft:"30px"}}>{this.props.Details}</div>
                <br/><br/>
                        <div className="row">
                            <div className="col">
                            <div className="h3"  style={{paddingLeft:"30px"}}><input type="number" className="form-control"placeholder="Enter amount" width="48" onChange={this.handlerAmount}/></div>
                            </div>
                         </div>
                </div>
            </div>
            </div>
            <div className="card-footer bg-transparent border-success">
             <div className="row float-right">
                            <div className="col-auto"><div className="h3">{this.props.Price} THB </div></div>
                            <div className="col-auto"><button type="button" className=" btn btn-primary " data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">SHOW ME..</button></div>
                            <div className="col-auto"><NavLink exact to="/Bill"><button type="button" className="btn btn-warning" onClick={this.hanlerSetDataToProp}>BOOK</button></NavLink></div>
                         </div>
            </div>          
        </div>
        );
    }
}

export default connect(mapStateToProp,Eventbean) (EventReservationList)