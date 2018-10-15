import React, { Component } from 'react';
import Logo from '../../../../Images/logo.png'
import {connect} from 'react-redux'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate'
import Reservationbean from '../../../Models/Reservationbean'
import * as firebase from 'firebase'
import * as jsPDF from 'jspdf'
import * as html2canvas from 'html2canvas';
import {NavLink} from 'react-router-dom'

class Bill extends Component{
    state={
        reservationId : 0,
        DateofBill : null,
        eventtotal : 0,
        activitytotal : 0,
        roomtotal : 0,
        sum : 0,
        request : "000"
    }
    componentDidMount=()=>{
        let d = new Date();
        this.setState({
            DateofBill : (d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear()
        })
            this.handlerGetLastKey()
            this.handlerSumTotal()
            // this.handlerGenerateToPdf()
    }
    handlerSumTotal=()=>{
        return this.setState({
            sum : (parseInt(this.props.reservation.priceofroom+this.props.reservation.priceofactivty+this.props.reservation.priceofevent)),
        }) 
    }
    handlerSetPropsToDataBase=()=>{
        if(this.props.reservation.roomname!==null){
            this.handlerRoomToDatabase()
        }
        if(this.props.reservation.activityname!==null){
            this.handlerActivityToDataBase()
        }
        if(this.props.reservation.eventname!==null){
            this.handlerEventToDataBase()
        }
        firebase.database().ref('Reservation/'+this.props.reservation.id).set({
            Username : this.props.reservation.username,
            ID : this.props.reservation.id,
            Checkin : this.props.reservation.checkin,
            Checkout : this.props.reservation.checkout,
            Roomname : this.props.reservation.roomname,
            Activityname : this.props.reservation.activityname,
            Eventname : this.props.reservation.eventname,
            PriceofRoom : this.props.reservation.priceofroom,
            PriceofEvent : this.props.reservation.priceofevent,
            PriceofActivity : this.props.reservation.priceofactivty,
            Roomamount : this.props.reservation.amountroom,
            Activityamount : this.props.reservation.activityamount,
            Eventamount : this.props.reservation.eventamount,
            Status :"Not Paied",
            Totals : this.state.sum,
            Extrabed : this.props.reservation.extrabed,
            BillofDate : this.state.DateofBill,
            PaymentDate : "-"
        }).then(()=>{
            this.props.setCheckin(null)
            this.props.setCheckout(null)
            this.props.setAmountroom(null)
            this.props.setExtrabed(null)
            this.props.setRoomname(null)
            this.props.setPriceofRoom(null)
            this.props.setActivityname(null)
            this.props.setPriceofActivity(null)
            this.props.setEventname(null)
            this.props.setPriceofEvent(null)
            this.props.setActivityamount(null)
            this.props.setEventamount(null)
            this.setState({
                sum : 0,
                request : "001"
            });
        });
       
    }
    handlerRoomToDatabase=()=>{
        firebase.database().ref('RoomReservation/'+this.props.reservation.id).set({
            Username : this.props.reservation.username,
            ID : this.props.reservation.id,
            Checkin : this.props.reservation.checkin,
            Checkout : this.props.reservation.checkout,
            Roomname : this.props.reservation.roomname,
            PriceofRoom : this.props.reservation.priceofroom,
            Roomamount : this.props.reservation.amountroom,
            Status :"Not Paied",
            Totals : this.state.sum,
            Extrabed : this.props.reservation.extrabed,
            PaymentDate : "-"
        });
    }
    handlerEventToDataBase=()=>{
        firebase.database().ref('EventReservation/'+this.props.reservation.id).set({
            Username : this.props.reservation.username,
            ID : this.props.reservation.id,
            Eventname : this.props.reservation.eventname,
            PriceofEvent : this.props.reservation.priceofevent,
            Eventamount : this.props.reservation.eventamount,
            Status :"Not Paied",
            PaymentDate : "-"
        });
    }
    handlerActivityToDataBase=()=>{
        firebase.database().ref('ActivityReservation/'+this.props.reservation.id).set({
            Username : this.props.reservation.username,
            ID : this.props.reservation.id,
            Activityname : this.props.reservation.activityname,
            PriceofActivity : this.props.reservation.priceofactivty,
            Activityamount : this.props.reservation.activityamount,
            Status :"Not Paied",
            PaymentDate : "-"
        });
    }
    handlerGenerateToPdf=()=>{

        html2canvas(document.body).then(function(canvas) {
            document.body.appendChild(canvas);
            var doc = new jsPDF()            
            doc.addImage(canvas,"JPEG", 1, 1)
            doc.save('a4.pdf')
            console.log(canvas)
        });
        // html2canvas(document.body,{
        //     onrendered : function(canvas){
        //         var img = canvas.toDataUrl("image/png");
        //         var doc = new jsPDF();
        //         doc.addImage(img,'JPEG',20,20);
        //         doc.save('test.pdf')
        //     }
        // });
    }
    handlerGetLastKey=()=>{
        return firebase.database().ref('Reservation/').once('value').then((snapshort)=>{
            var itemsKey = []
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                itemsKey.push(childData)
            })
            var keys = Object.keys(itemsKey)
                this.setState({
                    reservationId : keys.length+1
                })
        }).then(()=>{
            this.props.setID(this.state.reservationId)
        });
    }

    render(){
        console.log(this.state)
        let activityview = null
        let eventview = null
        let View = null
        let Modal = null
        Modal = <div class="modal fade" id="Bill" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Comsaed Bills</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Would you like to reservation?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
                   <button type="button" class="btn btn-success" onClick={this.handlerSetPropsToDataBase}>Save changes</button>
                </div>
                </div>
            </div>
        </div>
        if(this.state.request==="001"){
            Modal = <div class="modal fade" id="Bill" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Comsaed Bills</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Successful your reservation.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
        }
        if(this.props.reservation.activityname!==null){
            activityview = <tr>
            <th scope="row">2</th>
            <td>{this.props.reservation.activityname}</td>
            <td>{this.props.reservation.activityamount}</td>
            <td>{this.props.reservation.priceofactivty}</td>
            </tr>
        }
        if(this.props.reservation.eventname!==null){
            eventview =  <tr>
            <th scope="row">3</th>
            <td>{this.props.reservation.eventname}</td>
            <td >{this.props.reservation.eventamount}</td>
            <td>{this.props.reservation.priceofevent}</td>
            </tr>
        }    
        return(
            <div className="container" >
            <div style={{paddingTop:"40px"}}></div>
            <div className="card shadow-lg">
                <div className="card-body">
                <div className="container" style={{borderColor:"black",borderStyle:"solid",paddingTop:"40px"}}>
              <div className="h1 font-weight-bold">Comaed Riverkwai Resort Bill</div>
              <div style={{paddingTop:"40px"}}></div>
                    <div className="row">
                        <div className="col-auto" style={{width:"auto"}}><div style={{width:"auto",float:"left"}}><img src={Logo} alt="Logo" height="50" width="auto" /></div></div>
                        <div className="col-sm-4"><div className="text-left font-weight-bold">89 Moo 5 Ladya Amphur Muang Kanchanaburi Thailand 71190</div></div>
                        <div className="col-sm">
                            <div><div className="row float-right">
                                <div className="col-auto"><div className="h5 text-left w-auto">Bill No.</div></div>
                                <div className="col-auto">{this.state.reservationId}</div>    
                            </div>   
                            </div>
                            <div>
                            <div className="row float-right">
                                <div className="col-auto"><div className="h5 text-left w-auto">Date.</div></div>
                                <div className="col-auto">{this.state.DateofBill}</div>    
                            </div>    
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <div className="row">
                            <div className="col-auto"><div className="h5 text-left w-auto">Name</div></div>
                            <div className="col-auto">{this.props.member.name}</div>    
                            </div>
                           
                            </div>
                        <div className="col-sm">
                        <div className="row">
                            <div className="col-auto"><div className="h5 text-left w-auto">Lastname</div></div>
                            <div className="col-auto">{this.props.member.lastname}</div>    
                        </div>
                        </div>
                        <div className="col-sm">
                        <div className="row">
                            <div className="col-auto"><div className="h5 text-left w-auto">Email</div></div>
                            <div className="col-auto">{this.props.member.email}</div>    
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <div className="row">
                                <div className="col-auto"><div className="h5 text-left w-auto">Phone</div></div>
                                <div className="col-auto">{this.props.member.phone}</div>    
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="row">
                                <div className="col-auto"><div className="h5 text-left w-auto">Address</div></div>
                                <div className="col-auto">{this.props.member.address}</div>    
                            </div>
                        </div>
                    </div>
                    <div style={{paddingTop:"30px"}}></div>
                        <div className="table-responsive-sm">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                <th scope="col"><div className="h6">#</div></th>
                                <th scope="col"><div className="h6">Description</div></th>
                                <th scope="col"><div className="h6">Amont</div></th>
                                <th scope="col"><div className="h6">Total</div></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>{this.props.reservation.roomname}</td>
                                <td>{this.props.reservation.amountroom}+{"["+this.props.reservation.extrabed+"]"}</td>
                                <td>{this.props.reservation.priceofroom}</td>
                                </tr>
                               {activityview}
                               {eventview}
                                <tr>
                                <th scope="row"></th>
                                <td colspan="2"><div className="h6 text-right">summarize</div></td>
                                <td><div className="h3">{this.state.sum}</div></td>
                                </tr>
                            </tbody>
                        </table>

                        </div>
                    <div className="row float-right">
                        <div className="col-auto"><NavLink exact to="/ReservationList"><button type="button" class="btn btn-warning btn-lg float-right">BACK TO HOME</button></NavLink></div>
                        <div className="col-auto"><button type="button" class="btn btn-success btn-lg float-right"  data-toggle="modal" data-target="#Bill">success</button></div>
                    </div>
            </div>
                </div>
            </div>
            
            {Modal}
            </div>
        )
    }
}

export default connect(mapStateToProps,Reservationbean)(Bill)