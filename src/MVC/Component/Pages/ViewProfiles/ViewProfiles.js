import React,{Component} from 'react'
import mapStateToProps from '../../..//Controler/Mapstate/Mapstate'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
import {NavLink} from 'react-router-dom'
class ViewProfiles extends Component{
    constructor() {
        super();
        this.state = {
            Name: null,
            Lastname: null,
            Address: null,
            Email: null,
            Phone: null,
            Username:null,
            Password: null,
            Repeat: null,
            Picturename: null,
            Picture: null,
            uploadValue: 0,
            key : null,
            Typemember : null,
            changes : null,
            request : null
        };
        this.onchoosePicture = this.onchoosePicture.bind(this);
    }
    //State//
    onsetName = (event) => {
        this.setState({
            Name: event.target.value
        })
    }
    onsetLastName = (event) => {
        this.setState({
            Lastname: event.target.value
        })
    }
    onsetEmail = (event) => {
        this.setState({
            Email: event.target.value
        })
    }
    onsetAddress = (event) => {
        this.setState({
            Address: event.target.value
        })
    }
    onsetUsername = (event) => {
        this.setState({
            Username: event.target.value
        })
    }
    onsetPassword = (event) => {
        this.setState({
            Password: event.target.value
        })
    }
    onsetPhone = (event) => {
        this.setState({
            Phone: event.target.value
        })
    }
    
    onsetRepeatPassword = (event) => {
        this.setState({
            Repeat: event.target.value
        })
    }
    onchoosePicture = (event) => {
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref('Pictures/' + " ' " + file.name + " ' ");
        const upload = storageRef.put(file);
        upload.then(snapshot =>
            snapshot.ref.getDownloadURL()
        )
            .then(url =>
                this.setState({
                    Picturename: url
                })
            ).then(() => {
                this.setState({
                    uploadValue: 100
                 })
            });
    }    
    hanlerSelect=(event)=>{
        this.setState({
            Typemember : event.target.value
        })
    }

    //Controller//
    hanlersetValuetoProfiles=()=>{
        this.setState({
            Username : this.props.login.username,
            Password : this.props.login.password,
            Name : this.props.member.name,
            Lastname : this.props.member.lastname,
            Address : this.props.member.address,
            Email : this.props.member.email,
            Phone : this.props.member.phone,
            Picturename : this.props.member.picture,
            Typemember : this.props.member.typemember
        });
    }
    hanlerEditNewProfiles=()=>{
        if(this.props.member.typemember === "Member"||this.props.member.typemember === "Event Manager"||this.props.member.typemember === "Activity Manager"||this.props.member.typemember === "Room Manager"&&this.state.Username !=="null"){
            firebase.database().ref('Register/Member/'+this.state.Username).update({
                Name : this.state.Name,
                Lastname : this.state.Lastname,
                Address : this.state.Address,
                Email : this.state.Email,
                Phone : this.state.Phone,
                Username : this.state.Username,
                Password : this.state.Password,
                Picture : this.state.Picturename,
            }).then(()=>{
                this.setState({
                    changes : "001"
                });
            });
            this.props.setUsername(this.state.Username)
            this.props.setPassword(this.state.Password)
            this.props.setName(this.state.Name)
            this.props.setLastname(this.state.Lastname)
            this.props.setEmail(this.state.Email)
            this.props.setAddress(this.state.Address)
            this.props.setPhone(this.state.Phone)
            this.props.setPicture(this.state.Picturename)
        }if(this.props.member.typemember === "Admin"&&this.state.Username !=="null"){
            firebase.database().ref('Register/Member/'+this.state.Username).update({
                Name : this.state.Name,
                Lastname : this.state.Lastname,
                Address : this.state.Address,
                Email : this.state.Email,
                Phone : this.state.Phone,
                Username : this.state.Username,
                Password : this.state.Password,
                Picture : this.state.Picturename,
                Status : this.state.Typemember
            }).then(()=>{
                this.setState({
                    changes : "001"
                });
            });
            if(this.props.login.username===this.state.Username){
                this.props.setUsername(this.state.Username)
                this.props.setPassword(this.state.Password)
                this.props.setName(this.state.Name)
                this.props.setLastname(this.state.Lastname)
                this.props.setEmail(this.state.Email)
                this.props.setAddress(this.state.Address)
                this.props.setPhone(this.state.Phone)
                this.props.setPicture(this.state.Picturename)
                this.props.setTypemember(this.state.Typemember)
            }
        }
       
    }
    handlerViewprofilescontroller=()=>{
        if(this.props.login.loginstatus!==null){
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
                  if(k!== null&&this.props.login.loginstatus===items[k].Username){
                    this.setState({
                      request : "001",
                      Username : items[k].Username,
                      Password : items[k].Password,
                      Name : items[k].Name,
                      Lastname : items[k].Lastname,
                      Address : items[k].Address,
                      Email : items[k].Email,
                      Phone : items[k].Phone,
                      Picturename : items[k].Picture,
                      Typemember : items[k].Status,
                      ID : items[k].ID
                    });
                  }
              }
          });
        }
    }
    hanlerClearToReturnPermission=()=>{
        this.props.setLoginStatus(null)
    }
    hanlerStatus=()=>{
        var select = document.getElementById("select")
        ,arr = ["Admin","Member","Event Manager","Activity Manager","Room Manager"];
        for(var i=0;i<arr.length;i++){
          var option = document.createElement("OPTION"),
          txt = document.createTextNode(arr[i]);
          option.appendChild(txt);
          option.setAttribute("value",arr[i]);
          select.insertBefore(option,select.lastChild);  
    }
    }

    //Life cycles
    componentDidMount=()=>{
        this.hanlersetValuetoProfiles()
        if(this.props.login.username!==null){
        this.hanlerStatus()
        }
        this.handlerViewprofilescontroller()
    }
    render(){
        let Modal = null 
        let Profiles = null
        let Checkdisable = false
        let AdminLink = false
        let ProfilesController = null

        //Modals
        Modal = <div className="modal fade" id="EditProfiles" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Profiles</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure to edit your profiles?
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={this.hanlerEditNewProfiles}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      if(this.state.changes==="001"){
        Modal = <div className="modal fade" id="EditProfiles" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Profiles</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Changes Profiles Success
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      }

      //Checkdisble
      if(this.props.member.typemember === "Member"||this.props.member.typemember === "Event Manager"||this.props.member.typemember === "Activity Manager"||this.props.member.typemember === "Room Manager"&&this.state.Username !=="null"){
        Checkdisable = true
        AdminLink = "/"
      }if(this.props.member.typemember === "Admin"){
        AdminLink = "/SuperUserSetpermission"
      }
      //All Views
      if(this.props.login.username===null){
        Profiles=<div></div>
      }
      if(this.props.login.username!==null){
        Profiles = <center>
         <h1 className="text-center" style={{fontSize:"60px",width:"fit-content"}}>This is your profiles<br/></h1>    
        <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{width : "800px",paddingTop:"50px"}}>
        <img className="card-img-top" src={this.state.Picturename} alt="Card image cap"/>
        <div className="card-body">
        <div className="container"><div class="row">
        <div class="col">
        <p className="palagrapht text-left"> <div className="text-left" style={{fontSize: "20px" ,fontWeight : "bold"}}><i class="fas fa-user"></i> Name</div>  </p><br/>
        <input type="text" className="form-control" onChange={this.onsetName} value={this.state.Name} /><br/>
        </div>
        <div className="col">
        <p className="palagrapht text-left"> <div className="text-left" style={{fontSize: "20px" ,fontWeight : "bold"}}><i class="fas fa-user"></i> Lastname</div> </p><br/>
        <input type="text" className="form-control"  onChange={this.onsetLastName} value={this.state.Lastname}/><br/>  
        </div>
        </div></div>
        
        <div className="container"><div className="row">
        <div className="col">
        <p className="palagrapht text-left"> <div className="text-left" style={{fontSize: "20px" ,fontWeight : "bold"}}><i class="fas fa-address-book"></i> Address</div></p><br/>
        <textarea  className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.onsetAddress} value={this.state.Address}/><br/>  
        </div>
        <div className="col">
        <p className="palagrapht text-left"> <div className="text-left" style={{fontSize: "20px" ,fontWeight : "bold"}}><i class="fas fa-envelope"></i> Email</div></p><br/>
        <input type="email" className="form-control"  placeholder="name@example.com"  onChange={this.onsetEmail} value={this.state.Email}/><br/>  
        </div>
        </div></div>
        
        <div className="container"><div className="row">
        <div className="col">
        <p className="palagrapht text-left"> <div className="text-left" style={{fontSize: "20px" ,fontWeight : "bold"}}><i class="fas fa-phone"></i> Phone</div></p><br/>
        <input type="text" className="form-control"  onChange={this.onsetPhone} value={this.state.Phone}/><br/>  
        </div>
        <div className="col">
        </div>
        </div></div>
        
        <div className="container"><div class="row">
        <div className="col">
        <p className="palagrapht text-left"> <div className="text-left" style={{fontSize: "20px" ,fontWeight : "bold"}}> <i class="fas fa-user"></i> Username</div></p><br/>
        <input type="text" className="form-control" onChange={this.onsetUsername} value={this.state.Username}/><br/>  
        </div>
        <div class="col">
        <p className="palagrapht text-left"> <div className="text-left" style={{fontSize: "20px" ,fontWeight : "bold"}}> <i class="fas fa-unlock-alt"></i> Password</div></p><br/>
        <input type="password" className="form-control"  onChange={this.onsetPassword} value={this.state.Password}/><br/>  
        </div>
        </div> </div>
        <div className="container">
                    <p className="palagrapht text-left"> <div className="text-left" style={{fontSize: "20px" ,fontWeight : "bold"}}><i class="fas fa-battery-full"></i> Status</div> </p><br/>
                    <select id="select"className="form-control" value={this.state.Typemember} onChange={this.hanlerSelect}  disabled={Checkdisable}>
                    <option value="default">default</option>
                    </select>
                    </div>
        <br/>
        <div className="container"><input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" onChange={this.onchoosePicture}/>
       </div>
        <div className="container">
        <div className="row" style={{padding : "10px"}}>
        <div className="col" >
            <NavLink exact to={AdminLink}><button type="button" className="btn btn-danger" onClick={this.hanlerClearToReturnPermission} style={{width : '100%'}}>Cancel</button></NavLink>
        </div>
        <div className="col" style={{textAlign : "center"}}><button type="submit" className="btn btn-success"style={{width : '100%'}}
        data-toggle="modal" data-target="#EditProfiles">Edit</button></div>
        </div> </div>
        </div>
        </div></center>
      }
        return(
            <div className="container" style={{paddingTop:"50px"}}>
                {Profiles}
                {Modal}
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
export default connect(mapStateToProps,mapDispathToProps)(ViewProfiles)