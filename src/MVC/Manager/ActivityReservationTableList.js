import React, { Component } from 'react';
import {connect} from 'react-redux'
import mapStateToProps from '../Controler/Mapstate/Mapstate';
import ActivityReservationTable from '../Component/ViewList/TableList/ActivityReservationTableList'
import * as firebase from 'firebase'
import Reservationbean from '../Models/Reservationbean'
class ActivityReservationTableList extends Component{
    state = {
        text : "",
        Totals : null,
        Amount : null,
        request : "000"
    }
    
    hanlerSearching=(event)=>{
        this.setState({
            text : event.target.value
        })
      }
    handlerChangeDataToDatabase=()=>{
        if(this.props.reservation.id!==null){
          
                firebase.database().ref('ActivityReservation/'+this.props.reservation.id).update({
                    Status :this.props.reservation.billstatus,
                }).then(()=>{
                    this.props.setActivityname(null)
                    this.setState({
                        request : "001"
                    });
                });
            }
    }
    render(){
        let fillteredContract = null
        let View = null
        let ButtonView = null
        let Modal = null
        if(this.props.member.typemember === "Member"&&this.props.login.username !== null){
            fillteredContract = this.props.reservationlist.filter(card=>{
                return card.Username.indexOf(this.props.login.username)!== -1
            });
        }if(this.props.member.typemember === "Activity Manager"&&this.props.login.username !== null){
            fillteredContract = this.props.reservationlist.filter(card=>{
                return card.Username.indexOf(this.state.text)!== -1
            });
            Modal = <div className="modal fade" id="BillStatus" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Bills Status</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div className="modal-body">
                            Would you like to change bill status?
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" onClick={this.handlerChangeDataToDatabase}>Save changes</button>
                            </div>
                        </div>
                        </div>
                    </div>
            ButtonView = <div className="row float-right">
            <div className="col-auto"><div className="h1">{this.props.sum} THB</div></div>
            <div className="col-auto"><button type="button" class="btn btn-warning btn-lg float-right">BACK TO HOME</button></div>
            <div className="col-auto"><button type="button" class="btn btn-success btn-lg float-right" data-toggle="modal" data-target="#BillStatus">success</button></div>
            </div>
        }
        if(this.props.member.username !== null){
            View = <div className="container-fluid">
                    <div style={{paddingBottom:"50px"}}><input class="form-control" id="myInput" type="text" placeholder="Search.." onChange={this.hanlerSearching}/></div>
                <div className="card shadow-lg" >
                <div className="card-body">
                <div className="table-responsive table-hover">
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Activity</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Username</th>
                    <th scope="col">Totals</th>
                    <th scope="col">Status</th>
                    <th scope="col">Trash</th>
                    </tr>
                </thead>
                <tbody>
                {
                    fillteredContract.map(card=>{
                    return <ActivityReservationTable
                        ID = {card.ID}
                        Activityname = {card.Activityname}
                        Totals = {card.Totals}
                        Status = {card.Status}
                        Username = {card.Username}
                        Activityamount = {card.Activityamount}
                        PriceofActivity = {card.PriceofActivity}

                    />
                    })
                }                
                </tbody>
                </table>
            </div>    
                </div>
            </div>
            {ButtonView}
        </div>
        }
        if(this.props.member.username === null){
            View = <div></div>
        }
        if(this.state.request==="001"){
            Modal = <div className="modal fade" id="BillStatus" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Bills Status</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                Change Bill Status Success.
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
                </div>
            </div>
            </div>
        </div>
        }
        return(
            <div>
                {View}
                {Modal}
            </div>
            
           
        );
    }
}

export default connect(mapStateToProps,Reservationbean) (ActivityReservationTableList)