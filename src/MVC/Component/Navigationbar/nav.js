import React,{Component} from 'react'
import './nav.css'
import $ from 'jquery'
import {NavLink} from 'react-router-dom'
import Logo from '../../../Images/logo.png'
import {connect} from 'react-redux'
import * as firebase from 'firebase'

class nav extends Component {
  state = {
    username: null,
    password: null,
    Picture : null
}
  onChangepassword = (event) => {
    this.setState({
        password: event.target.value
    })
    if(event.key ==='Enter'){
      this.checkLogin()
    }
}
onChangeusername = (event) => {
    this.setState({
        username: event.target.value
    })
}
componentDidMount = () => {
  this.props.setName(null)
  this.props.setPassword(null)
  this.props.setStatus(null)
  this.props.setPicture(null)
}
checkLogin = () => {
  return firebase.database().ref('Register/Member').once('value').then((snapshort) => {
      var items = []
      snapshort.forEach(function (childSnapshort) {
          var childKey = childSnapshort.key
          var childData = childSnapshort.val()
          items.push(childData)
      })
      var user = Object.keys(items)
      var usn = (this.state.username)
      var psw = (this.state.password)
      var usnValue = null
      var pswValue = null
      let picurl = null
      let status = null
      for (var i = 0; i < user.length; i++) {
          var k = user[i]
          var users = items[k].Username
          var pass = items[k].Password
           
          var j = user[i].key
          if (usn == users && psw == pass) {
              usnValue = users
              pswValue = pass
              picurl = items[k].Picture
              status = items[k].Status
          }

      }
      if (usnValue == usn && pswValue == psw) {
          this.props.setName(this.state.username)
          this.props.setPassword(this.state.password)
          this.props.setStatus(status)
          this.props.setPicture(picurl)
      }
  })
}
hanlerCleardata=()=>{
          this.props.setName(null)
          this.props.setPassword(null)
          this.props.setStatus(null)
          this.props.setPicture(null)
}
    render(){
        $( document ).ready(function() {
            $('.leftmenutrigger').on('click', function(e) {
            $('.side-nav').toggleClass("open");
            e.preventDefault();
           });
       });

       let status = null 

       if(this.props.user.status === "Member"){
          status = <div style={{paddingRight : "125px"}}><li className="nav-item dropdown" data-toggle="modal" style={{fontSize : "16px"}}>
          <NavLink className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" exact to="/Home">{this.props.user.username}</NavLink>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" exact to="/Viewprofiles"><div style={{textAlign : "center"}}><img style={{borderRadius : "50%"}} src={this.props.user.picture} alt="Logo" height="60" width="auto" /></div></NavLink>
          <NavLink className="dropdown-item" exact to="/ReservationRoom">ReservationRoom</NavLink>
          <NavLink className="dropdown-item" exact to="/ReservationList">ReservationList</NavLink>
          <NavLink className="dropdown-item" exact to="/" data-toggle="modal" data-target="#exampleLogout">Logout</NavLink>
          </div>
          <span className="sr-only">(current)</span>
          </li>
          </div>
      }
       if(this.props.user.status === "Admin"){
          status = <div style={{paddingRight : "125px"}}><li className="nav-item dropdown" data-toggle="modal" style={{fontSize : "16px"}}>
          <NavLink className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" exact to="/Home">{this.props.user.username}</NavLink>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" exact to="/Viewprofiles"><div style={{textAlign : "center"}}><img style={{borderRadius : "50%"}} src={this.props.user.picture} alt="Logo" height="60" width="auto" /></div></NavLink>
          <NavLink className="dropdown-item" exact to="/ReservationRoom">ReservationRoom</NavLink>
          <NavLink className="dropdown-item" exact to="/SuperUserEditRoom">Edit ReservationRoom</NavLink>
          <NavLink className="dropdown-item" exact to="/SuperUserCancelRoom">Delete ReservationRoom</NavLink>
          <NavLink className="dropdown-item" exact to="/ReservationActivity">ReservationActivity</NavLink>
          <NavLink className="dropdown-item" exact to="/SuperUserEditActivity">Edit ReservationActivity</NavLink>
          <NavLink className="dropdown-item" exact to="/SuperUserCancelActivity">Delete ReservationActivity</NavLink>
          <NavLink className="dropdown-item" exact to="/ReservationEvent">ReservationEvent</NavLink>
          <NavLink className="dropdown-item" exact to="/SuperUserEditEvent">Edit ReservationEvent</NavLink>
          <NavLink className="dropdown-item" exact to="/SuperUserCancelEvent">Delete ReservationEvent</NavLink>
          <NavLink className="dropdown-item" exact to="/SuperUserSetpermission">Permission</NavLink>
          <NavLink className="dropdown-item" exact to="/ReservationList">Reservation List</NavLink>
          <NavLink className="dropdown-item" exact to="/" data-toggle="modal" data-target="#exampleLogout">Logout</NavLink>

          </div>
          <span className="sr-only">(current)</span>
          </li>
          </div>
       }
       if(this.props.user.status === "Room Manager"){
        status = <div style={{paddingRight : "125px"}}><li className="nav-item dropdown" data-toggle="modal" style={{fontSize : "16px"}}>
        <NavLink className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" exact to="/Home">{this.props.user.username}</NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <NavLink className="dropdown-item" exact to="/Viewprofiles"><div style={{textAlign : "center"}}><img style={{borderRadius : "50%"}} src={this.props.user.picture} alt="Logo" height="60" width="auto" /></div></NavLink>
        <NavLink className="dropdown-item" exact to="/ReservationRoom">ReservationRoom</NavLink>
        <NavLink className="dropdown-item" exact to="/SuperUserEditRoom">Edit ReservationRoom</NavLink>
        <NavLink className="dropdown-item" exact to="/SuperUserCancelRoom">Delete ReservationRoom</NavLink>
        <NavLink className="dropdown-item" exact to="/ReservationList">Reservation List</NavLink>
        <NavLink className="dropdown-item" exact to="/" data-toggle="modal" data-target="#exampleLogout">Logout</NavLink>

        </div>
        <span className="sr-only">(current)</span>
        </li>
        </div>

      }
      if(this.props.user.status === "Activity Manager"){
        status = <div style={{paddingRight : "125px"}}><li className="nav-item dropdown" data-toggle="modal" style={{fontSize : "16px"}}>
        <NavLink className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" exact to="/Home">{this.props.user.username}</NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <NavLink className="dropdown-item" exact to="/Viewprofiles"><div style={{textAlign : "center"}}><img style={{borderRadius : "50%"}} src={this.props.user.picture} alt="Logo" height="60" width="auto" /></div></NavLink>
        <NavLink className="dropdown-item" exact to="/ReservationActivity">ReservationActivity</NavLink>
        <NavLink className="dropdown-item" exact to="/SuperUserEditActivity">Edit ReservationActivity</NavLink>
        <NavLink className="dropdown-item" exact to="/SuperUserCancelActivity">Delete ReservationActivity</NavLink>
        <NavLink className="dropdown-item" exact to="/ReservationList">Reservation List</NavLink>
        <NavLink className="dropdown-item" exact to="/" data-toggle="modal" data-target="#exampleLogout">Logout</NavLink>
        </div>
        <span className="sr-only">(current)</span>
        </li>
        </div>
      }
      if(this.props.user.status === "Event Manager"){
        status = <div style={{paddingRight : "125px"}}><li className="nav-item dropdown" data-toggle="modal" style={{fontSize : "16px"}}>
        <NavLink className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" exact to="/Home">
       {this.props.user.username}</NavLink>
        <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
        <NavLink className="dropdown-item" exact to="/Viewprofiles"><div style={{textAlign : "center"}}><img style={{borderRadius : "50%"}} src={this.props.user.picture} alt="Logo" height="60" width="auto" /></div></NavLink>
        <NavLink className="dropdown-item" exact to="/ReservationEvent">ReservationEvent</NavLink>
        <NavLink className="dropdown-item" exact to="/SuperUserEditEvent">Edit ReservationEvent</NavLink>
        <NavLink className="dropdown-item" exact to="/SuperUserCancelEvent">Delete ReservationEvent</NavLink>
        <NavLink className="dropdown-item" exact to="/ReservationList">Reservation List</NavLink>
        <NavLink className="dropdown-item" exact to="/" data-toggle="modal" data-target="#exampleLogout">Logout</NavLink>
        </div>
        <span className="sr-only">(current)</span>
        </li>
        </div>
      }
       let logintohome = null
       let datataget = null
       let popup = null 
       let logout = null
       logout = <div className="modal fade" id="exampleLogout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
       <div className="modal-dialog" role="document">
         <div className="modal-content">
           <div className="modal-header">
             <h5 className="modal-title" id="exampleModalLabel">Are you sure to logout?</h5>
             <button type="button" class="close" data-dismiss="modal" aria-label="Close" style={{width: "fit-content"}}>
               <span aria-hidden="true">&times;</span>
             </button>
           </div>
           <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={this.hanlerCleardata}>Sure</button>
           </div>
         </div>
       </div>
     </div>
       if(this.props.user.username !== null){
          logintohome = status
          popup = <div className="modal fade" id="exampleModals" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Login Success</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style={{width: "fit-content"}}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
       }if(this.props.user.username === null){
          logintohome = <div style={{paddingRight : "125px"}}>
                        <NavLink className="nav-link" exact to="/Login"><div style={{fontSize : "16px"}}>Login</div></NavLink>
                        <span className="sr-only">(current)</span>
                        </div>
          datataget = "#exampleModals"
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
                 <div style={{width : "fit-content",float :"right"}}><input type="text" className="form-control" placeholder="Username" onKeyUp={this.onChangeusername}  required/></div>
                 </div>
                 <div className="col" style={{textAlign :"center"}}>
                 <div style={{width : "fit-content",float :"left"}}><input type="password" className="form-control" placeholder="Password" onKeyUp={this.onChangepassword} required/></div>
               </div>
               </div>
              </div>
              <div className="modal-footer">
                 <NavLink ecact to="/Register"><button type="button" className="btn btn-danger">Register</button></NavLink>
                 <NavLink ecact to="/"><button type="button" className="btn btn-success" onClick={this.checkLogin}>Login</button></NavLink>
              </div>
            </div>
          </div>
        </div>
        logout = <div className="modal fade" id="exampleLogout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Login Success</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" style={{width: "fit-content"}}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
       }
        return(
    
    <div >
    <nav className="navbar fixed-top navbar-expand-lg navbar navbar-dark bg-dark " >
      <div style={{paddingLeft : "120px"}}><a className="navbar-brand" href="#" data-aos="zoom-in"><img src={Logo} alt="Logo" height="50" width="auto" /></a></div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li className="nav-item mb-0">
            <NavLink className="nav-link" ecact to="/" ><div style={{fontSize : "16px"}}>Home</div>
              <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" ecact to="/Accommodation"><div style={{fontSize : "16px"}}>Accommodation</div>
              <span className="sr-only">(current)</span>
            </NavLink>
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
        <li className="nav-item" data-toggle="modal" data-target={datataget}>
                {logintohome}
        </li>
        </ul>
    </form>
      </div>
    </nav>
    {popup}
    {logout}
    <div className="bg img-fluid">
            <div style={{alignItems : "center",padding : "300px"}} data-aos="zoom-in">
            <div className="headerfont">Welcome to<div data-aos="fade-in" style={{width: "200px",marginLeft : "auto",marginRight:"auto"}}><img className="img-fluid" alt="Responsive image" src={Logo} style={{width : "300px"}}/></div></div>
            <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s"/>
            <div style={{textAlign : "center",fontSize:"15px",padding : "10px",color : "#F4F5F8"}}>คำแสด ริเวอร์ แคว รีสอร์ท มอบความสะดวกสบายให้กับวันหยุดพักผ่อนของท่านด้วยบรรยากาศ สวนป่าเขียวขจี พร้อมกิจกรรมสนุกสนานเพลิดเพลิน และ ห้องพัก ที่ให้ความรู้สึกเหมือนบ้าน และมีความเป็นส่วนตัวสูงกว่ามาตรฐานทั่วไป</div>   
            </div>
            </div>
    </div>
  
  )
    }
}
const mapStateToProps = (state) => {
  return {
      member: state.member,
      login: state.login,
      reservation: state.reservation,
      room: state.room,
      activity: state.activity,
      event: state.event,
  }
}

const mapDispathToProps = (dispath) => {
  return {
    setName: (username) => {
      dispath({
        type: "SET_USERNAME",
        payload: username
      })
    }, setStatus: (status) => {
      dispath({
        type: "SET_STATUS",
        payload: status
      })
    },setPicture: (picture) => {
      dispath({
        type: "SET_PICTURE",
        payload: picture
      })
    },
    setPassword : (password) =>{
      dispath({
        type: "SET_PASSWORD",
        payload: password
      })
    },setLogin: (login) => {
      dispath({
        type: "SET_LOGIN",
        payload: login
      })
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(nav)
