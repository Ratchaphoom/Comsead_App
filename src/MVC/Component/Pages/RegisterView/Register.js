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
        Request : null
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

    upload.then(snapshot =>
        snapshot.ref.getDownloadURL()

    )
        .then(url =>
            this.setState({
                Picture: url
            })

        ).then(() => {
            this.setState({
                uploadValue: 100
            })
        });
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
            Request : "001"
        });
    });

}

    render(){
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
          <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>Name</div>  </p><br/>
          <input type="text" className="form-control"    onChange={this.onsetName} /><br/>
          </div>
          <div className="col">
          <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>Lastname</div> </p><br/>
          <input type="text" className="form-control"  onChange={this.onsetLastName}/><br/>  
          </div>
          </div></div>
          
          <div className="container"><div className="row">
          <div className="col">
          <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>Address</div></p><br/>
          <input type="text" className="form-control"  onChange={this.onsetAddress}/><br/>  
          </div>
          <div className="col">
          <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>Email</div></p><br/>
          <input type="text" className="form-control"  onChange={this.onsetEmail}/><br/>  
          </div>
          </div></div>
          
          <div className="container"><div className="row">
          <div className="col">
          <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>Phone</div></p><br/>
          <input type="text" className="form-control"  onChange={this.onsetPhone}/><br/>  
          </div>
          <div className="col">
          </div>
          </div></div>
          
          <div className="container"><div class="row">
          <div className="col">
          <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>Username</div></p><br/>
          <input type="text" className="form-control" onChange={this.onsetUsername}/><br/>  
          </div>
          <div class="col">
          <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>Password</div></p><br/>
          <input type="text" className="form-control"  onChange={this.onsetPassword}/><br/>  
          </div>
          <div class="col">
          <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>Repeat Password</div></p><br/>
          <input type="text" className="form-control"  onChange={this.onsetRepeatPassword}/><br/>  
          </div>
          </div> </div>
          
          <div className="container"><input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" onChange={this.onchoosePicture}/>
         </div>
          <div className="container">
          <div className="row" style={{padding : "10px"}}>
          <div className="col" >
              <NavLink exact to="/"><button type="button" className="btn btn-danger" onClick={this.onReturn} style={{width : '100%'}}>Cancel</button></NavLink>
          </div>
          <div className="col" style={{textAlign : "center"}}><button type="submit" className="btn btn-success" onClick={this.onRegister} style={{width : '100%'}} 
           data-toggle="modal" data-target="#RegisterProfiles">Sign Up</button></div>
          </div> </div>
          </div>
          </div></center>
          {Modal}
      </div>
        )
    }
}
export default Register