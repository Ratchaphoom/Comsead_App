import React,{Component} from 'react'
import mapStateToProps from '../../..//Controler/Mapstate/Mapstate'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
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
            Typemember : null
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
            }).then(
                alert("Edit Success")
            );
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
            }).then(
                alert("Edit Success")
            );
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
    componentDidMount=()=>{
        this.hanlersetValuetoProfiles()
        if(this.props.login.username!==null){
        this.hanlerStatus()
        }
        
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


    render(){
        let Modal = null 
        let Profiles = null
        let Checkdisable = false

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

      //Checkdisble
      if(this.props.member.typemember === "Member"||this.props.member.typemember === "Event Manager"||this.props.member.typemember === "Activity Manager"||this.props.member.typemember === "Room Manager"&&this.state.Username !=="null"){
        Checkdisable = true
      }
      //All Views
      if(this.props.login.username===null){
        Profiles=<div></div>
      }
      if(this.props.login.username!==null){
        Profiles = <center><div className="card shadow p-3 mb-5 bg-white rounded" style={{width : "800px"}}>
        <img className="card-img-top" src={this.state.Picturename} alt="Card image cap" style={{borderRadius : "50%"}} />
        <div className="card-body">
        <div className="container"><div class="row">
        <div class="col">
        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>Name</div>  </p><br/>
        <input type="text" className="form-control" onChange={this.onsetName} value={this.state.Name} /><br/>
        </div>
        <div className="col">
        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>Lastname</div> </p><br/>
        <input type="text" className="form-control"  onChange={this.onsetLastName} value={this.state.Lastname}/><br/>  
        </div>
        </div></div>
        
        <div className="container"><div className="row">
        <div className="col">
        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>Address</div></p><br/>
        <input type="text" className="form-control"  onChange={this.onsetAddress} value={this.state.Address}/><br/>  
        </div>
        <div className="col">
        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>Email</div></p><br/>
        <input type="text" className="form-control"  onChange={this.onsetEmail} value={this.state.Email}/><br/>  
        </div>
        </div></div>
        
        <div className="container"><div className="row">
        <div className="col">
        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>Phone</div></p><br/>
        <input type="text" className="form-control"  onChange={this.onsetPhone} value={this.state.Phone}/><br/>  
        </div>
        <div className="col">
        </div>
        </div></div>
        
        <div className="container"><div class="row">
        <div className="col">
        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>Username</div></p><br/>
        <input type="text" className="form-control" onChange={this.onsetUsername} value={this.state.Username}/><br/>  
        </div>
        <div class="col">
        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>Password</div></p><br/>
        <input type="password" className="form-control"  onChange={this.onsetPassword} value={this.state.Password}/><br/>  
        </div>
        </div> </div>
        <div className="container">
                    <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>Status</div> </p><br/>
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
            <button type="button" className="btn btn-danger" onClick={this.onReturn} style={{width : '100%'}}>Cancel</button>
        </div>
        <div className="col" style={{textAlign : "center"}}><button type="submit" className="btn btn-success"style={{width : '100%'}}
        data-toggle="modal" data-target="#EditProfiles">Edit</button></div>
        </div> </div>
        </div>
        </div></center>
        
      }
        return(
            <div className="container">
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