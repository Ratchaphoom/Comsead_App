import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as firebase from 'firebase'

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
        key : null

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
        })

}


componentDidMount=()=>{
   
    firebase.database().ref('Register/Member').once('value').then((snapshort) => {
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
    }).then(response => {
        if (this.state.Password == this.state.Repeat) {
            alert("Add Sucess")
            this.props.history.push('/Login')
        }
        if (this.state.Password != this.state.Repeat) {
            alert("Please set password same value")
            this.props.history.push('/Register')
        }
    });
}

onReturn = () => {
    this.props.history.push("/Login")
}
    render(){
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
              <button type="button" className="btn btn-danger" onClick={this.onReturn} style={{width : '100%'}}>Cancel</button>
          </div>
          <div className="col" style={{textAlign : "center"}}><button type="submit" className="btn btn-success" onClick={this.onRegister} style={{width : '100%'}}>Sign Up</button></div>
          </div> </div>
          </div>
          </div></center>
      </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      member : state.member,
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
          },setPhone: (phone) =>{
              dispath({
                  type: "SET_PHONE",
                  payload: phone
              })
          }
    }
  }
export default connect(mapStateToProps,mapDispathToProps)(Register)