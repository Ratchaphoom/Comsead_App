import React,{Component} from 'react'
import '../CSS/Header.css'
import DatePicker from 'react-datepicker'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Logo from '../../../Images/logo.png'
import mapStateToProp from '../../Controler/Mapstate/Mapstate'
import Reservationbean from '../../Models/Reservationbean'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

class ReservationBar extends Component{
    constructor (props) {
        super(props)
        this.state = {
         startDate: moment(),
         endDate: moment().add(1,"days"),
          roomamount : 1,
          bed : 0
        };
        
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handlerRoomAmount = this.handlerRoomAmount.bind(this);
        this.handlerExtraBed = this.handlerExtraBed.bind(this);
      }
      handleChangeStart(startDate) {
        this.setState({
          startDate: startDate
        });
      }
      
      handleChangeEnd(endDate) {
        this.setState({
          endDate: endDate
        });
      }
      handlerRoomAmount=(event)=>{
            this.setState({
                roomamount : event.target.value
            });
      }
      handlerExtraBed=(event)=>{
            this.setState({
                bed : event.target.value         
            });
      }
      handlerSetToProps=()=>{
            let startDate = (this.state.startDate.month()+1)+"/"+this.state.startDate.date()+"/"+this.state.startDate.year();
            let endDate = (this.state.endDate.month()+1)+"/"+this.state.endDate.date()+"/"+this.state.endDate.year();
            if(startDate!==endDate){
                this.props.setCheckin(startDate);
                this.props.setCheckout(endDate);
                this.props.setAmountroom(this.state.roomamount);
                this.props.setExtrabed(this.state.bed);
            }
            
    }
    render(){
        return(
                <div className="bg img-fluid">
                    <div className="row" style={{paddingTop:"250px",paddingBottom:"260px",paddingLeft:"10px",width:"100%"}}>
                        <div className="col-12 col-md-8">
                            <div className="h1 text-left" style={{fontSize:"80px",color:"white"}}>Comsaed Riverkwai Resort<br/>
                            <hr className="my-4" style={{height:"4px",backgroundColor:"white"}}/></div></div>
                        <div className="col-6 col-md-4">
                                <div className="card shadow-lg" style={{width : "fit-content",float:"right"}}>
                                    <div className="card-body">
                                        <div><img/><img src={Logo} alt="Logo" height="100" width="auto" /></div>
                                        <div className="h6" style={{paddingTop:"10px"}}>                    
                                            <div className="row">
                                                <div className="col">  
                                                    <DatePicker
                                                        className="form-control"
                                                        selected={this.state.startDate}
                                                        onChange={this.handleChangeStart}
                                                        minDate={moment()}
                                                        maxDate={moment().add(5, "months")}
                                                        showDisabledMonthNavigation 
                                                    />  
                                                </div>
                                                <div className="col"> 
                                                <DatePicker
                                                        className="form-control"
                                                        selected={this.state.endDate}
                                                        onChange={this.handleChangeEnd}
                                                        minDate={moment().add(1,"days")}
                                                        maxDate={moment().add(5, "months")}
                                                        showDisabledMonthNavigation  
                                                    /> 
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="row">
                                                <div className="col">    
                                                <input type="number" className="form-control"placeholder="Enter room" onChange={this.handlerRoomAmount}/>
                                                </div>
                                                <div className="col"><input type="number" className="form-control"placeholder="Enter extrabed"onChange={this.handlerExtraBed}/></div>
                                            </div>
                                        </div>
                                        <div>
                                            <NavLink exact to="/ReservationRoom"><button type="button" className="btn btn-success" style={{width:"100%"}} onClick={this.handlerSetToProps}>SEARCH</button></NavLink>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default connect(mapStateToProp,Reservationbean) (ReservationBar)