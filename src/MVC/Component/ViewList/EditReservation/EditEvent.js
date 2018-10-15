import React,{Component} from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate'
import Eventbean from '../../../Models/Eventbean'
import ImageZoom from 'react-medium-image-zoom'

class EditEvent extends Component{
    handlerSetIdtoProp=()=>{
        this.props.setId(this.props.ID)
    }
    render(){
        return(
            <div className="card border-success mb-3 shadow-lg" data-aos="fade-right">
            <div className="card-header bg-transparent border-success"> <div className=" text-left h2" style={{color:"#43a047"}}>{this.props.Eventname} </div></div>
            <div className="card-body">
            <div className="row" data-aos="zoom-in">
                <div className="col-9 text-left h1" style={{color:"#007E33"}}></div>
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
                <div className="col-6 text-left" ><div className="h3" style={{paddingLeft:"30px"}}>{this.props.Eventname}</div>
                <br/><div className="multi-collapse" id="multiCollapseExample2" style={{paddingLeft:"40px"}}>{this.props.Details}</div>
                <br/><br/>
                       
                </div>
            </div>
            </div>
            <div className="card-footer bg-transparent border-success">
            <div className="row float-right">
                            <div className="col-auto"><div className="h3">{this.props.Price} THB </div></div>
                            <div className="col-auto"><NavLink exact to="/EditReservationEvent"><button type="button" className="btn btn-success"  onClick={this.handlerSetIdtoProp}>EDIT</button></NavLink></div>
            </div>
            </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,Eventbean) (EditEvent)