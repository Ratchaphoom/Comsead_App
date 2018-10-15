import React,{Component} from 'react'
import mapStateToProps from '../../../../Controler/Mapstate/Mapstate'
import Activitybean from '../../../../Models/Activitybean'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
import {NavLink} from 'react-router-dom'

class EditActivityView extends Component{
    state={
        ActivityId : null,
        Activityname : null,
        ActivityPrice : null,
        ActivityDescription : null,
        ActivityCategolry : null,
        ActivityImages : null,
        Request : null,
        percentage : null

    }
    //Handlercontroller
    handlerActivityname=(event)=>{
        this.setState({
            Activityname : event.target.value
        });
    }
    handlerPrice=(event)=>{
        this.setState({
            ActivityPrice : event.target.value
        });
    }
    hanlerSelect=(event)=>{
        this.setState({
            ActivityCategolry : event.target.value
        });
    }
    handlerDetails=(event)=>{
        this.setState({
            ActivityDescription : event.target.value
        });
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
                    ActivityImages: url
                })
        ).catch(console.error);
    }    
    hanlerCategolryActivity=()=>{
        var select = document.getElementById("categolryactivity")
        ,arr = ["Viteethai","Activities"];
        for(var i=0;i<arr.length;i++){
          var option = document.createElement("OPTION"),
          txt = document.createTextNode(arr[i]);
          option.appendChild(txt);
          option.setAttribute("value",arr[i]);
          select.insertBefore(option,select.lastChild);  
    }
    }
    handlerGetValuefromDB=()=>{
        firebase.database().ref('ActivityDB/').once('value').then((snapshort)=>{
            let id = 0
            var itemsKey = []
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                itemsKey.push(childData)
            })
            var keys = Object.keys(itemsKey)
            for(var i=0;i<keys.length;i++){
                var k = keys[i]
                id = itemsKey[k].ID
                if(this.props.activity.id === id){
                    this.setState({
                        ActivityId : itemsKey[k].ID,
                        Activityname : itemsKey[k].Activityname,
                        ActivityPrice : itemsKey[k].Price,
                        ActivityDescription : itemsKey[k].Details,
                        ActivityCategolry : itemsKey[k].Categolry,
                        ActivityImages : itemsKey[k].Picture,
                    })
                }
            }
        }).then(()=>{
            this.props.setId(this.state.ActivityId)
            this.props.setActivityName(this.state.Activityname)
            this.props.setPrice(this.state.ActivityPrice)
            this.props.setDescription(this.state.ActivityDescription)
            this.props.setCategolry(this.state.ActivityCategolry)
            this.props.setImages(this.state.ActivityImages)
        }).catch(console.error);
    }
    handlerCancel=()=>{
        this.props.setId(null)
        this.props.setActivityName(null)
        this.props.setPrice(null)
        this.props.setDescription(null)
        this.props.setCategolry(null)
        this.props.setImages(null)
    }
    handalerPushRoomToProps=()=>{
        this.props.setId(this.state.ActivityId)
        this.props.setActivityName(this.state.Activityname)
        this.props.setPrice(this.state.ActivityPrice)
        this.props.setDescription(this.state.ActivityDescription)
        this.props.setCategolry(this.state.ActivityCategolry)
        this.props.setImages(this.state.ActivityImages)
    }
    handalerPushRoomToDatabase=()=>{
        firebase.database().ref('ActivityDB/'+this.props.activity.id).update({
            ID : this.props.activity.id,
            Activityname : this.props.activity.activityname,
            Categolry : this.props.activity.categolry,
            Details : this.props.activity.description,
            Picture : this.props.activity.images,
            Price :this.props.activity.price
        }).then(()=>{
            this.setState({
                Request : "001",
            })
        }).catch(console.error)
    }
    //Lifecycle
    componentDidMount=()=>{
        if(this.props.login.username!==null&&this.props.member.typemember!=="Member"){
            this.hanlerCategolryActivity()
            this.handlerGetValuefromDB()
        }
    }
    render(){
        let ViewAddActivity = null
        let Modal = null
        //Modals//
        Modal = <div className="modal fade" id="AddActivity" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Rooms</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Would you like to craete a new activity?
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={this.handalerPushRoomToDatabase}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      if(this.state.Request==="001"){
        Modal = <div className="modal fade" id="AddActivity" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Rooms</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              You just already created new activity.
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      }
        //View//
        if(this.props.login.username === null){
            ViewAddActivity = <div></div>
        }
        if(this.props.login.username !== null){
            ViewAddActivity = <div>
                                <div className="h1 text-center">Edit new activity</div>
                                <center><div class="card" data-aos="zoom-in" style={{width : "600px"}}>
                                                    <img className="img-fluid" src={this.state.ActivityImages} alt="Card image cap"/>
                                                        <div className="card-body">
                                                        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold",width : "fit-content",float : "left"}}><i class="fas fa-torii-gate"></i> Activity Name</div>  </p><br/>
                                                        <p className="card-text"><input  type="text" className="form-control" style={{width : "100%"}} placeholder="Activityname" onChange={this.handlerActivityname} value={this.state.Activityname}/></p>
                                                        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold",width : "fit-content",float : "left"}}><i class="fas fa-money-check-alt"></i> Price</div>  </p><br/>
                                                        <p className="card-text"><input type="number"className="form-control" style={{width : "100%"}}placeholder="price" onChange={this.handlerPrice} value={this.state.ActivityPrice}/></p>
                                                        <div className="container">
                                                        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}><i class="fas fa-briefcase"></i> CategolyActivity</div> </p><br/>
                                                        <select id="categolryactivity"className="form-control" value={this.state.ActivityCategolry} onChange={this.hanlerSelect}>
                                                        <option value="default">default</option>
                                                        </select>
                                                        </div>
                                                        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold",width : "fit-content",float : "left"}}><i class="fas fa-font"></i> Details</div>  </p><br/>
                                                        <p className="card-title"><textarea  onChange={this.handlerDetails} value={this.state.ActivityDescription} class="form-control" rows="5"/></p>
                                                        <p className="card-text"><input type="file"className="form-control" style={{width : "100%"}}placeholder="Price" onChange={this.onchoosePicture}/></p>
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{width : this.state.percentage+"%"}} aria-valuenow={this.state.percentage} aria-valuemin="0" aria-valuemax="100">{this.state.percentage}%</div>
                                                        </div>
                                                        <div className="conrainer">
                                                            <div className="row" style={{padding : "10px"}}>
                                                                <div className="col">
                                                                <button type="button" className="btn btn-success"onClick={this.handalerPushRoomToProps} style={{width : "100%"}} data-toggle="modal" data-target="#AddActivity">Success</button>
                                                                </div>  
                                                                <div class="col">
                                                                <NavLink exact to="/SuperUserEditActivity"><button type="button" className="btn btn-danger" onClick={this.handlerCancel} style={{width : "100%"}}>Cancel</button></NavLink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div></center>
                                            </div>
        }
        return(
            <div className="container">
            {ViewAddActivity}
            {Modal}
            </div>
        );
    }
}

export default connect(mapStateToProps,Activitybean) (EditActivityView)