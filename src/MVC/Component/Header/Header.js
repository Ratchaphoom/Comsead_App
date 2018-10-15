import React, { Component } from 'react';
import '../CSS/Header.css'
import mapStateToProps from '../../Controler/Mapstate/Mapstate'
import {connect} from 'react-redux'
import ReservationBar from '../Navigationbar/ReservationBar'
class Header extends Component{
    render(){
        let View = null
        if(this.props.member.typemember!=="Member"){
        View = <div className="bg2 img-fluid">
                <div className="row" style={{paddingTop:"250px",paddingBottom:"260px",paddingLeft:"10px",width:"100%"}}>
                    <div className="col-9" style={{backgroundColor:""}}><div className="h1 text-left" style={{fontSize:"100px",color:"white"}}>Comsaed Riverkwai Resort<br/>
                    <hr className="my-4" style={{height:"4px",backgroundColor:"white"}}/></div></div>
                    <div className="col-4" style={{backgroundColor:""}}><div className="h6 text-left" style={{color:"white",fontSize:"17px"}}><br/><br/>คำแสด ริเวอร์ แคว รีสอร์ท มอบความสะดวกสบายให้กับวันหยุดพักผ่อนของท่านด้วยบรรยากาศ สวนป่าเขียวขจี พร้อมกิจกรรมสนุกสนานเพลิดเพลิน และ ห้องพัก ที่ให้ความรู้สึกเหมือนบ้าน และมีความเป็นส่วนตัวสูงกว่ามาตรฐานทั่วไป</div></div>
                </div>
            </div>
        }
        if(this.props.login.username!==null && this.props.member.typemember==="Member"){
            View = <ReservationBar/>
        }
        return(
            <header>
                 {View}
            </header>
        )
    }
}

export default connect(mapStateToProps)(Header)