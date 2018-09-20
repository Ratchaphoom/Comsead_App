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

        })
    }
    componentDidMount=()=>{
        this.hanlersetValuetoProfiles()
    }
    render(){
        return(
            <div className="container">
            <center><div className="card shadow p-3 mb-5 bg-white rounded" style={{width : "800px"}}>
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
            
            <div className="container"><input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" onChange={this.onchoosePicture}/>
           </div>
            <div className="container">
            <div className="row" style={{padding : "10px"}}>
            <div className="col" >
                <button type="button" className="btn btn-danger" onClick={this.onReturn} style={{width : '100%'}}>Cancel</button>
            </div>
            <div className="col" style={{textAlign : "center"}}><button type="submit" className="btn btn-success" onClick={this.onRegister} style={{width : '100%'}}>Edit</button></div>
            </div> </div>
            </div>
            </div></center>
        </div>
        );
    }
}

export default connect(mapStateToProps)(ViewProfiles)