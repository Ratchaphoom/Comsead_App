import React,{Component} from 'react'
import Logo from '../../../Images/logo.png'
import './nav.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

class Navigationitems extends Component{
    render(){
        return(
            <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar navbar-dark bg-dark ">
                <a className="navbar-brand" href="#"><img src={Logo} alt="Logo" height="50" width="auto" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item mb-0">
                    <NavLink className="nav-link" ecact to="/" ><div style={{fontSize : "16px"}}>Home</div>
                    <span className="sr-only">(current)</span>
                    </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Accomodation
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink exact to="/Riverwing" className="dropdown-item" >River wing</NavLink>
                        <NavLink exact to="/Villawing" className="dropdown-item" >Villa wing</NavLink>
                        <NavLink exact to="/Gardenwing" className="dropdown-item" >Garden wing</NavLink>
                        <NavLink exact to="/Mountainviewwing" className="dropdown-item" >Moutain View wing</NavLink>
                        <NavLink exact to="/Familyroom" className="dropdown-item" >16 Beds Family Room</NavLink>
                        <NavLink exact to="/Familyhouse" className="dropdown-item" >Family House</NavLink>
                        <NavLink exact to="/Deluxevilla" className="dropdown-item" >Deluxe Villa</NavLink>
                        <NavLink exact to="/Gardenview" className="dropdown-item" >Garden View</NavLink>
                        </div>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/Activities"><div style={{fontSize : "16px"}}>Activity</div></NavLink>
                        <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/Event"><div style={{fontSize : "16px"}}>Event</div></NavLink>
                        <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/"><div style={{fontSize : "16px"}}>Contact</div></NavLink>
                        <span className="sr-only">(current)</span>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li> */}
                    </ul>
                    <form className="form-inline my-2 my-lg-0">

                    </form>
                </div>
            </nav>
            <div className="bg img-fluid">
            <div style={{alignItems : "center",padding : "300px"}} data-aos="zoom-in">
            <div className="headerfont">Wellcome to<div data-aos="fade-in" style={{width: "200px",marginLeft : "auto",marginRight:"auto"}}><img className="img-fluid" alt="Responsive image" src={Logo} style={{width : "300px"}}/></div></div>
            <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s"/>
            <div style={{textAlign : "center",fontSize:"15px",padding : "10px",color : "#F4F5F8"}}>คำแสด ริเวอร์ แคว รีสอร์ท มอบความสะดวกสบายให้กับวันหยุดพักผ่อนของท่านด้วยบรรยากาศ สวนป่าเขียวขจี พร้อมกิจกรรมสนุกสนานเพลิดเพลิน และ ห้องพัก ที่ให้ความรู้สึกเหมือนบ้าน และมีความเป็นส่วนตัวสูงกว่ามาตรฐานทั่วไป</div>   
            </div>
            </div>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
      member : state.user,
      login : state.login,
    }
  }

  const mapDispathToProps = (dispath) => {
    return {
        setUsername: (username) => {
            dispath({
              type: "SET_USERNAME",
              payload: username
            })
          }, setPassword: (password) => {
            dispath({
              type: "SET_PASSWORD",
              payload: password
            })
          },setLoginStatus: (loginstatus) => {
            dispath({
              type: "LOGIN_STATUS",
              payload: loginstatus
            })
          },setID: (id) => {
            dispath({
              type: "SET_ID",
              payload: id
            })
          }, setName: (name) => {
            dispath({
              type: "SET_NAME",
              payload: name
            })
          },setLastname: (lastname) => {
            dispath({
              type: "SET_LASTNAME",
              payload: lastname
            })
          },setPicture: (picture) => {
            dispath({
              type: "SET_PICTURE",
              payload: picture
            })
          },setTypemember: (typemember) => {
            dispath({
              type: "SET_TYPEMEMBER",
              payload: typemember
            })
          },setEmail: (email) => {
            dispath({
              type: "SET_EMAIL",
              payload: email
            })
          },setAddress: (address) => {
            dispath({
              type: "SET_ADDRESS",
              payload: address
            })
          }
    }
  }
  
export default connect(mapStateToProps,mapDispathToProps)(Navigationitems)