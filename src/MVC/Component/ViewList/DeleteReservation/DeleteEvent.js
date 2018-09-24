import React, { Component } from 'react';
import * as firebase from 'firebase'

class DeleteEvent extends Component{
    hanlerDelete=()=>{
        firebase.database().ref('EventDB/'+this.props.ID).remove()
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
                                <button type="button" class="btn btn-danger" onClick={this.hanlerDelete}>Delete</button>
                                    </div>      
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default DeleteEvent