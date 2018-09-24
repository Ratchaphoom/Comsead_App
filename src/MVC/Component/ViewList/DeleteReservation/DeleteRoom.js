import React, { Component } from 'react';
import * as firebase from 'firebase'

class DeleteRoom extends Component{
    hanlerDelete=()=>{
        firebase.database().ref('RoomDB/'+this.props.ID).remove()
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
                                <button type="button" class="btn btn-danger" onClick={this.hanlerDelete}>Delete</button>
                                    </div>      
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default DeleteRoom