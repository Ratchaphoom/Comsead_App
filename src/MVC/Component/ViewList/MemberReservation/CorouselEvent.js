import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

class CalouselEvent extends Component{
    render(){
        return(
            <div className="carousel-item col-md-4">
                 <div className="card shadow-lg" style={{width: "18rem"}}>
                <img className="card-img-top" src={this.props.Picture} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title text-left">{this.props.Eventname}</h5>
                    <p className="card-text text-left">{this.props.Details}</p>
                    <NavLink exact to="/Event" className="btn btn-primary">Go Event Page</NavLink>
                </div>
            </div>
            </div>
          
        )
    }
}

export default CalouselEvent