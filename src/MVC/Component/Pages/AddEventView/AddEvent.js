import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate'
import Eventbean from '../../../Models/Eventbean'

class AddEvent extends Component{
    state={
        EventId : null,
        Eventname : null,
        EventPrice : null,
        EventDescription : null,
        EventImages : null,
        Request : null,
        UpdateID : null,
        percentage : null,
        check1 : null,
        check2 : null,
        check3 : null


    }
    //HandlerController
    handlerEventname=(event)=>{
        this.setState({
            Eventname : event.target.value
        })
    }
    handlerPrice=(event)=>{
        this.setState({
            EventPrice : event.target.value
        })
    }
    handlerDetails=(event)=>{
        this.setState({
            EventDescription : event.target.value
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
                    EventImages: url
                })
        ).catch(console.error);
    }    
    handlerCancel=()=>{
        this.props.setId(null)
        this.props.setEventname(null)
        this.props.setPrice(null)
        this.props.setDescription(null)
        this.props.setImages(null)
    }
    handlerLastID=()=>{
        firebase.database().ref('EventDB/').once('value').then((snapshort)=>{
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
            }
                this.setState({
                    EventId : id+1,
                    UpdateID :"000",

                })
        }).catch(console.error);
    }
    handalerPushRoomToProps=()=>{
        if(this.state.Eventname!==null&&this.state.EventPrice!==null&&this.state.EventDescription!==null){
            this.props.setId(this.state.EventId)
            this.props.setEventname(this.state.Eventname)
            this.props.setPrice(this.state.EventPrice)
            this.props.setDescription(this.state.EventDescription)
            this.props.setImages(this.state.EventImages)
        }
       this.handlerCheckvalue()
    }
    handalerPushRoomToDatabase=()=>{
        if(this.state.Eventname!==null&&this.state.EventPrice!==null&&this.state.EventDescription!==null){
            firebase.database().ref('EventDB/'+this.props.event.id).set({
                ID : this.props.event.id,
                Eventname : this.props.event.eventname,
                Price : this.props.event.price,
                Details : this.props.event.description,
                Picture : this.props.event.images
                
            }).then(()=>{
                this.props.setId(null)
                this.props.setEventname(null)
                this.props.setPrice(null)
                this.props.setDescription(null)
                this.props.setImages(null)
                this.setState({
                    Request : "001",
                    UpdateID :"001",
                    Eventname : null,
                    EventPrice : null,
                    EventDescription : null,
                    EventImages : null
                })
            }).catch(console.error)
        }
    }
    handlerCheckvalue=()=>{
        let check1  = null
        let check2  = null
        let check3  = null

        let Eventname = this.state.Eventname
        let EventPrice = this.state.EventPrice
        let EventDescription = this.state.EventDescription

        if(this.state.Eventname === null || this.state.Eventname === "" || Eventname.length < 2 ){
            check1 = "Please input eventname && more than 2 letter."
        }if(this.state.EventPrice === null||this.state.EventPrice === ""){
            check2 = "Please input price."
        }if(this.state.EventDescription === null||this.state.EventDescription === ""||this.state.EventDescription === "default"){
            check3 = "Please input detail."
        }
        this.setState({
            check1 : check1,
            check2 : check2,
            check3 : check3,
        })
    }
    //LifeCycle
    componentDidMount=()=>{
        if(this.props.login.username!==null&&this.props.member.typemember!=="Member"){
            this.handlerLastID()
        }
    }
    componentDidUpdate=()=>{
        if(this.props.login.username!==null&&this.props.member.typemember!=="Member"&&this.state.UpdateID === "001"){
            this.handlerLastID()
        }
    }
    render(){
        let ViewAddEvent = null
        let Modal = null
        //Modals
        Modal = <div className="modal fade" id="AddEvent" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Rooms</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Would you like to craete a new event?
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={this.handalerPushRoomToDatabase}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      if(this.state.Request==="001"){
        Modal = <div className="modal fade" id="AddEvent" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Rooms</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              You just already created new event.
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      }
        //Views
        if(this.props.login.username === null){
            ViewAddEvent = <div></div>
        } if(this.props.login.username !== null){
            ViewAddEvent = <div><div className="h1 text-center">Add new events</div>
                            <center><div className="card" data-aos="zoom-in" style={{width : "600px"}}>
                                                <img className="img-fluid" src={this.state.EventImages} alt="Card image cap"/>
                                                    <div className="card-body">
                                                    <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold",width : "fit-content",float : "left"}}><i class="fas fa-star"></i> Event Name</div>  </p>
                                                    <br/><div className="h4 text-left" style={{fontSize: "15px",color:"red"}}> {this.state.check1}</div>
                                                    <br/>
                                                    <p className="card-text"><input type="text" className="form-control"style={{width : "100%"}}placeholder="Eventname" onChange={this.handlerEventname}/></p>
                                                    <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold",width : "fit-content",float : "left"}}><i class="fas fa-money-check-alt"></i> Price</div>  </p>
                                                    <br/><br/><div className="h4 text-left" style={{fontSize: "15px",color:"red"}}> {this.state.check2}</div>
                                                    <br/>
                                                    <p className="card-text"><input type="number"className="form-control" style={{width : "100%"}}placeholder="price" onChange={this.handlerPrice}/></p>
                                                    <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold",width : "fit-content",float : "left"}}><i class="fas fa-font"></i> Details</div>  </p>
                                                    <br/><br/><br/><div className="h4 text-left" style={{fontSize: "15px",color:"red"}}> {this.state.check3}</div>
                                                    <br/>
                                                    <p className="card-title"><textarea  onChange={this.handlerDetails} class="form-control" rows="5"/></p>
                                                    <p className="card-text"><input type="file"className="form-control" style={{width : "100%"}}onChange={this.onchoosePicture}/></p>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{width : this.state.percentage+"%"}} aria-valuenow={this.state.percentage} aria-valuemin="0" aria-valuemax="100">{this.state.percentage}%</div>
                                                    </div>
                                                    <div className="conrainer" style={{padding : "10px"}}>
                                                        <div className="row">
                                                            <div className="col">
                                                            <button type="button" class="btn btn-success"onClick={this.handalerPushRoomToProps} style={{width : "100%"}} data-toggle="modal" data-target="#AddEvent">Success</button>
                                                            </div>  
                                                            <div className="col">
                                                            <button type="button" class="btn btn-danger" onClick={this.handlerCancel} style={{width : "100%"}}>Cancel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div></center>
                                    </div>
        }
        return(
            <div className="container">
            {ViewAddEvent}
            {Modal}
            </div>
        );
    }
}

export default connect(mapStateToProps,Eventbean) (AddEvent)