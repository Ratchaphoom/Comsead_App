import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
import {NavLink} from 'react-router-dom'
class Register extends Component{
  constructor() {
    super();
    this.state = {
        Name: null,
        Lastname: null,
        Address: null,
        Email: null,
        Phone: null,
        Username: null,
        Password: null,
        Repeat: null,
        Picturename: null,
        Picture: null,
        uploadValue: 0,
        key : null,
        Request : null,
        percentage : null,
        check1 : null,
        check2 : null,
        check3 : null,
        check4 : null,
        check5 : null,
        check6 : null,
        check7 : null,
        check8 : null,
    };
    this.onchoosePicture = this.onchoosePicture.bind(this);
}


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
    let progress = null
    upload.on('state_changed',(snapshot)=>{
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
        this.setState({
            percentage:progress
        })
      },(error)=> {
        // Handle unsuccessful uploads
        console.error
      })
        upload.then(snapshot =>
        snapshot.ref.getDownloadURL()
        )
        .then(url =>
            this.setState({
                Picture: url
            })

        );
}
componentDidMount=()=>{
   return firebase.database().ref('Register/Member').once('value').then((snapshort) => {
        var items = []
        snapshort.forEach(function (childSnapshort) {
            var childData = childSnapshort.val()
            items.push(childData)
        })
        var user = Object.keys(items)
            this.setState({
                key : user.length+1
            })
        });
 }
 
onRegister = () => {
    if(this.state.Name!==null&&this.state.Lastname!==null&&this.state.Email!==null&&this.state.Address!==null&&this.state.Phone!==null&&this.state.Username!==null
        &&this.state.Password!==null&&this.state.Repeat!==null){
        firebase.database().ref('Register/Member/'+this.state.Username).set({
            ID : this.state.key,
            Name: this.state.Name,
            Lastname: this.state.Lastname,
            Address: this.state.Address,
            Email: this.state.Email,
            Phone: this.state.Phone,
            Username: this.state.Username,
            Password: this.state.Password,
            Repeat: this.state.Repeat,
            Picture: this.state.Picture,
            Status : "Member"
        }).then(()=>{
            this.setState({
                Request : "001",
            });
        });
    }
   
}

    handlerCheckvalue=()=>{
        let check1  = null
        let check2  = null
        let check3  = null
        let check4  = null
        let check5  = null
        let check6  = null
        let check7  = null
        let check8  = null

        let Name = this.state.Name
        let Lastname = this.state.Lastname
        let Address = this.state.Address
        let Email = this.state.Email
        let Phone = this.state.Phone
        let Username = this.state.Username
        let Password = this.state.Password
        let Repeat = this.state.Repeat

        if(this.state.Name === null || this.state.Name === "" || Name.length < 2 ){
            check1 = "Please input name && more than 2 letter."
           
        }if(this.state.Lastname === null||this.state.Lastname === ""  || Lastname.length < 2){
            check2 = "Please input lastname && more than 2 letter."
        }if(this.state.Address === null||this.state.Address === ""  || Address.length < 2){
            check3 = "Please input address && more than 2 letter."
        }if(this.state.Email === null||this.state.Email === ""  || Email.length < 2||!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.Email)){
            check4 = "Please input email && more than 2 letter."
        }if(this.state.Phone === null||this.state.Phone === ""  || Phone.length < 10){
            check5 = "Please input phone && more than 10 letter."
        }if(this.state.Username === null||this.state.Username === ""  || Username.length < 2){
            check6 = "Please input username && more than 2 letter."
        }if(this.state.Password === null||this.state.Password === ""  || Password.length < 6){
            check7 = "Please input password && more than 6 letter."
        }if(this.state.Repeat === null||this.state.Repeat === ""  || Repeat.length < 6){
            check8 = "Please input repeat && more than 6 letter."
        }if(this.state.Repeat !== this.state.Password){
            check8 = "Please check your password again && more than 6 letter."
        }
        
        this.setState({
            check1 : check1,
            check2 : check2,
            check3 : check3,
            check4 : check4,
            check5 : check5,
            check6 : check6,
            check7 : check7,
            check8 : check8,

        })
    }

    render(){
        console.log(this.state)
        let Modal = null 
        Modal = <div className="modal fade" id="RegisterProfiles" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Profiles</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure to register?
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={this.hanlerEditNewProfiles}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      if(this.state.Request === "001" && this.state!==null){
        Modal = <div className="modal fade" id="RegisterProfiles" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Profiles</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Register Success
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      }
        return (
          <div className="container">
          <center><div className="card shadow p-3 mb-5 bg-white rounded" style={{width : "800px"}}>
          <img className="card-img-top" src={this.state.Picture} alt="Card image cap" style={{borderRadius : "50%"}}/>
          <div className="card-body">
          <div className="container"><div class="row">
          <div class="col">
            <p className="palagrapht">
                <div className="h3 text-left" style={{fontSize: "20px"}}><i class="fas fa-user"></i> Name</div>
                <div className="h4 text-left" style={{fontSize: "15px",color:"red" }}> {this.state.check1}</div>
            </p><br/>
          <input type="text" className="form-control" placeholder="First name"onChange={this.onsetName}  required="true"/><br/>
          </div>
          <div className="col">
          <p className="palagrapht"> <div className="h3 text-left" style={{fontSize: "20px" }}><i class="fas fa-user"></i> Lastname</div> 
          <div className="h4 text-left" style={{fontSize: "15px",color:"red" }}> {this.state.check2}</div>
          </p><br/>
          <input type="text" className="form-control" placeholder="Last name"  onChange={this.onsetLastName} required="true"/><br/>  
          </div>
          </div></div>
          
          <div className="container"><div className="row">
          <div className="col">
          <p className="palagrapht"> <div className="h3 text-left" style={{fontSize: "20px" }}><i class="fas fa-address-book"></i> Address</div>
          <div className="h4 text-left" style={{fontSize: "15px",color:"red" }}> {this.state.check3}</div>
          </p><br/>
          <textarea  className="form-control"  placeholder="1234 Main St" id="exampleFormControlTextarea1" rows="3"  onChange={this.onsetAddress} required="true"/><br/>  
          </div>
          <div className="col">
          <p className="palagrapht"> <div className="h3 text-left" style={{fontSize: "20px" }}><i class="fas fa-envelope"></i> Email</div>
          <div className="h4 text-left" style={{fontSize: "15px",color:"red" }}> {this.state.check4}</div>
          </p><br/>
          <input type="email" className="form-control"  placeholder="Email" onChange={this.onsetEmail} required="true"/><br/>  
          </div>
          </div></div>
          
          <div className="container"><div className="row">
          <div className="col">
          <p className="palagrapht"> <div className="h3 text-left" style={{fontSize: "20px"}}> <i class="fas fa-phone"></i> Phone</div>
          <div className="h4 text-left" style={{fontSize: "15px",color:"red" }}> {this.state.check5}</div>
          </p><br/>
          <input type="number" className="form-control"  placeholder="0880587789"  onChange={this.onsetPhone} required="true"/><br/>  
          </div>
          <div className="col">
          </div>
          </div></div>
          
          <div className="container"><div class="row">
          <div className="col">
          <p className="palagrapht"> <div className="h3 text-left" style={{fontSize: "20px"}}> <i class="fas fa-user"></i> Username</div>
          <div className="h4 text-left" style={{fontSize: "15px",color:"red" }}> {this.state.check6}</div>
          </p><br/>
          <input type="text" className="form-control"  placeholder="Username" onChange={this.onsetUsername} required="true"/><br/>  
          </div>
          <div class="col">
          <p className="palagrapht"> <div className="h3 text-left" style={{fontSize: "20px"}}> <i class="fas fa-unlock-alt"></i> Password</div>
          <div className="h4 text-left" style={{fontSize: "15px",color:"red" }}> {this.state.check7}</div>
          </p><br/>
          <input type="number" className="form-control"  placeholder="123456789"  onChange={this.onsetPassword} required="true"/><br/>  
          </div>
          <div class="col">
          <p className="palagrapht"> <div className="h3 text-left" style={{fontSize: "20px"}}><i class="fas fa-unlock-alt"></i> Repeat Password</div>
          <div className="h4 text-left" style={{fontSize: "15px",color:"red" }}> {this.state.check8}</div>
          </p><br/>
          <input type="password" className="form-control"  placeholder="123456789"  onChange={this.onsetRepeatPassword} required="true"/><br/>  
          </div>
          </div> </div>
          
          <div className="container"><input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" onChange={this.onchoosePicture}/>
         </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar"  style={{width:this.state.percentage+"%"}} aria-valuenow={this.state.percentage} aria-valuemin="0" aria-valuemax="100">{this.state.percentage}</div>
            </div>
          <div className="container">
          <div className="row" style={{padding : "10px"}}>
          <div className="col" >
              <NavLink exact to="/"><button type="button" className="btn btn-danger" onClick={this.onReturn} style={{width : '100%'}}>Cancel</button></NavLink>
          </div>
          <div className="col" style={{textAlign : "center"}}><button type="submit" className="btn btn-success" onClick={this.onRegister} style={{width : '100%'}} 
           data-toggle="modal" data-target="#RegisterProfiles" onClick={this.handlerCheckvalue}>Sign Up</button></div>
          </div> </div>
          </div>
          </div></center>
          {Modal}
      </div>
        )
    }
}
export default Register