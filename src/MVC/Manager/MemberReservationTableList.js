import React, { Component } from 'react';
import {connect} from 'react-redux'
import mapStateToProps from '../Controler/Mapstate/Mapstate';
import MemberReservationTable from '../Component/ViewList/TableList/MemberReservationTableList'
import * as firebase from 'firebase'
import Reservationbean from '../Models/Reservationbean'
import RoomReservationTableList  from '../Component/Pages/TableView/RoomTableView'
import ActivityTableView  from '../Component/Pages/TableView/ActivityTableView'
import EventTableView  from '../Component/Pages/TableView/EventTableView'

class MemberReservationTableList extends Component{
    state = {
        text : "",
        Totals : null,
        Amount : null,
        request : "000",
        paymentdate : null
    }
    componentDidMount=()=>{
        let d = new Date();
        this.setState({
            paymentdate : (d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear()
        })
    }
    hanlerSearching=(event)=>{
        this.setState({
            text : event.target.value
        })
      }
    handlerChangeDataToDatabase=()=>{
        if(this.props.reservation.id!==null){
            firebase.database().ref('Reservation/'+this.props.reservation.id).update({
                Status :this.props.reservation.billstatus,
                PaymentDate : this.state.paymentdate
            }).then(()=>{
                this.setState({
                    request : "001"
                });
            });
            firebase.database().ref('RoomReservation/'+this.props.reservation.id).update({
                Status :this.props.reservation.billstatus,
                PaymentDate : this.state.paymentdate            
            }).then(()=>{
                this.props.setRoomname(null)
                this.setState({
                    request : "001"
                });
            });

            if(this.props.reservation.activityname!==null){
                firebase.database().ref('ActivityReservation/'+this.props.reservation.id).update({
                    Status :this.props.reservation.billstatus,
                    PaymentDate : this.state.paymentdate
                }).then(()=>{
                    this.props.setActivityname(null)
                    this.setState({
                        request : "001"
                    });
                });
            }
            if(this.props.reservation.eventname!==null){
                firebase.database().ref('ActivityReservation/'+this.props.reservation.id).update({
                    Status :this.props.reservation.billstatus,
                    PaymentDate : this.state.paymentdate
                }).then(()=>{
                    this.props.setEventname(null)
                    this.setState({
                        request : "001"
                    });
                });
            }
        }
       
    }
    render(){
        let fillteredContract = null
        let View = null
        let ButtonView = null
        let Modal = null
        let word = null
        if(this.props.member.typemember === "Member"&&this.props.login.username !== null){
            fillteredContract = this.props.reservationlist.filter(card=>{
                return card.Username.indexOf(this.props.login.username)!== -1
            });
            ButtonView = <div className="row float-right">
            <div className="col-auto"><div className="h1">{this.props.usersum} THB</div></div>
            </div>
            word = "This is your reservation"
        }if(this.props.member.typemember === "Admin"&&this.props.login.username !== null){
            fillteredContract = this.props.reservationlist.filter(card=>{
                return card.Username.indexOf(this.state.text)!== -1
            });
            word = "This is your member reservation"
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
                    <h1 className="text-center" style={{fontSize:"60px",width:"fit-content"}}>{word}<br/></h1>
                    <div style={{paddingBottom:"50px"}}><input class="form-control" id="myInput" type="text" placeholder="Search.." onChange={this.hanlerSearching}/></div>
                <div className="card shadow-lg" >
                <div className="card-body">
                <div className="table-responsive table-hover">
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Checkin</th>
                    <th scope="col">Checkout</th>
                    <th scope="col">Roomname</th>
                    <th scope="col">Activity</th>
                    <th scope="col">Event</th>
                    <th scope="col">Username</th>
                    <th scope="col">Totals</th>
                    <th scope="col">Status</th>
                    <th scope="col">Paymentdate</th>
                    <th scope="col">Trash</th>
                    </tr>
                </thead>
                <tbody>
                {
                    fillteredContract.map(card=>{
                    return <MemberReservationTable
                        ID = {card.ID}
                        Checkin = {card.Checkin}
                        Checkout = {card.Checkout}
                        Roomname = {card.Roomname}
                        Activityname = {card.Activityname}
                        Eventname = {card.Eventname}
                        Totals = {card.Totals}
                        Status = {card.Status}
                        Username = {card.Username}
                        Amount = {card.Amount}
                        Extrabed = {card.Extrabed}
                        Paymentdate = {card.PaymentDate}
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

export default connect(mapStateToProps,Reservationbean) (MemberReservationTableList)