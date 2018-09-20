import React,{Component} from 'react'
import Logo from '../../../Images/logo.png'
import './nav.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import $ from 'jquery'
import mapStateToProps from '../../../MVC/Controler/Mapstate/Mapstate'
import * as firebase from 'firebase'

class Navigationitems extends Component{
    state={
        username : null,
        password : null,
        name : null,
        lastname : null,
        address : null,
        email : null,
        picture : null,
        typemember : null,
        phone : null,
        request : 0,
        id : null
    }

    hanlerUsername =(event)=>{
        this.setState({
            username : event.target.value
        })
    }

    hanlerPassword=(event)=>{
        this.setState({
            password : event.target.value
        })
    }
    hanlerLogin=()=>{
      return firebase.database().ref('Register/Member').once('value').then((snapshort) => {
        var items = []
        snapshort.forEach(function (childSnapshort) {
            var childKey = childSnapshort.key
            var childData = childSnapshort.val()
            items.push(childData)
        })
        var Login = Object.keys(items)
        for (var i = 0; i < Login.length; i++) {
            var k = Login[i]
            if(k!==null&&this.state.username===items[k].Username){
              this.setState({
                request : "001",
                username : items[k].Username,
                password : items[k].Password,
                name : items[k].Name,
                lastname : items[k].Lastname,
                address : items[k].Address,
                email : items[k].Email,
                phone : items[k].Phone,
                picture : items[k].Picture,
                typemember : items[k].Status,
                id : items[k].ID
              })
            }
        }
        if(this.state.request==="001"){
          this.props.setUsername(this.state.username)
          this.props.setPassword(this.state.password)
          this.props.setName(this.state.name)
          this.props.setLastname(this.state.lastname)
          this.props.setAddress(this.state.address)
          this.props.setEmail(this.state.email)
          this.props.setPhone(this.state.phone)
          this.props.setPicture(this.state.picture)
          this.props.setTypemember(this.state.typemember)
          this.props.setID(this.state.id)
        }
    });
      
    }
    render(){
        $( document ).ready(function() {
            $('.leftmenutrigger').on('click', function(e) {
            $('.side-nav').toggleClass("open");
            e.preventDefault();
           });
       });

       console.log(this.state)
       //if username === null
        let loginlink = null
        let popup = null 
        if(this.props.login.username === null){
            loginlink = <div style={{paddingRight : "125px"}}>
                        <NavLink className="nav-link" exact to="/Login"><div style={{fontSize : "16px"}}>Login</div></NavLink>
                        <span className="sr-only">(current)</span>
                        </div>
            popup = <div className="modal fade" id="exampleModals" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                         <div className="modal-dialog" role="document">
                           <div className="modal-content">
                             <div className="modal-header">
                               <h5 className="modal-title" id="exampleModalLabel"> <div className="login">Login</div></h5>
                               <button type="button" class="close" data-dismiss="modal" aria-label="Close" style={{width: "fit-content"}}>
                                 <span aria-hidden="true">&times;</span>
                               </button>
                             </div>
                             <div className="modal-body">
                              <div className="row md-form">
                                <div className="col" style={{textAlign : "center"}}>
                                <div style={{width : "fit-content",float :"right"}}><input type="text" className="form-control" placeholder="Username" onKeyUp={this.hanlerUsername}  required/></div>
                                </div>
                                <div className="col" style={{textAlign :"center"}}>
                                <div style={{width : "fit-content",float :"left"}}><input type="password" className="form-control" placeholder="Password" onKeyUp={this.hanlerPassword} required/></div>
                              </div>
                              </div>
                             </div>
                             <div className="modal-footer">
                                <NavLink ecact to="/Register"><button type="button" className="btn btn-danger">Register</button></NavLink>
                                <NavLink ecact to="/"><button type="button" className="btn btn-success" onClick={this.hanlerLogin}>Login</button></NavLink>
                             </div>
                           </div>
                         </div>
                       </div>
        }
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
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <ul className="navbar-nav ml-md-auto d-md-flex">
                    <li className="nav-item" data-toggle="modal" data-target="#exampleModals">
                            {loginlink}
                    </li>
                    </ul>
                </form>
                </div>
            </nav>
            {popup}
            <div className="bg img-fluid">
            <div style={{alignItems : "center",padding : "300px"}} data-aos="zoom-in">
            <div className="headerfont">Welcome to<div data-aos="fade-in" style={{width: "200px",marginLeft : "auto",marginRight:"auto"}}><img className="img-fluid" alt="Responsive image" src={Logo} style={{width : "300px"}}/></div></div>
            <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s"/>
            <div style={{textAlign : "center",fontSize:"15px",padding : "10px",color : "#F4F5F8"}}>คำแสด ริเวอร์ แคว รีสอร์ท มอบความสะดวกสบายให้กับวันหยุดพักผ่อนของท่านด้วยบรรยากาศ สวนป่าเขียวขจี พร้อมกิจกรรมสนุกสนานเพลิดเพลิน และ ห้องพัก ที่ให้ความรู้สึกเหมือนบ้าน และมีความเป็นส่วนตัวสูงกว่ามาตรฐานทั่วไป</div>   
            </div>
            </div>
            </div>
        );
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
          },setPhone: (phone) =>{
              dispath({
                  type: "SET_PHONE",
                  payload: phone
              })
          }
    }
  }
export default connect(mapStateToProps,mapDispathToProps)(Navigationitems)