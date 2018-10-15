import React,{Component} from 'react'
import mapStateToProps from '../../../../Controler/Mapstate/Mapstate'
import Roombean from '../../../../Models/Roombean'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
import {NavLink} from 'react-router-dom'


class EditRoomView extends Component{
    state={
        RoomId : null,
        RoomName : null,
        CategolyRoom : null,
        PriceRoom : null,
        RoomDescription : null,
        RoomImages : null,
        RoomAmount : null,
        RoomPrice : null,
        Request : null,
        percentage : null
    }

    //Handlercontrollers
    handalerRoomname=(event)=>{
        this.setState({
            RoomName : event.target.value
        })
    }
    handalerRoomAmount=(event)=>{
        this.setState({
            RoomAmount : event.target.value
        })
    }
    handalerRoomPrice=(event)=>{
        this.setState({
            RoomPrice : event.target.value
        })
    }
    handlerDetails=(event)=>{
        this.setState({
            RoomDescription : event.target.value
        })
    }
    hanlerSelect=(event)=>{
        this.setState({
            CategolyRoom : event.target.value
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
      });
        upload.then(snapshot =>
            snapshot.ref.getDownloadURL()
        )
        .then(url =>
                this.setState({
                    RoomImages: url
                })
        ).catch(console.error);
    }    
    hanlerCategolryRoom=()=>{
        var select = document.getElementById("categolryroom")
        ,arr = ["Deluxe Room","Suite Room","Mini-Suite Room","Standard","Deluxe","No Categolry"];
        for(var i=0;i<arr.length;i++){
          var option = document.createElement("OPTION"),
          txt = document.createTextNode(arr[i]);
          option.appendChild(txt);
          option.setAttribute("value",arr[i]);
          select.insertBefore(option,select.lastChild);  
    }
    }
    handalerPushRoomToProps=()=>{
        this.props.setID(this.state.RoomId)
        this.props.setRoomName(this.state.RoomName)
        this.props.setPrice(this.state.RoomPrice)
        this.props.setDescription(this.state.RoomDescription)
        this.props.setCategolry(this.state.CategolyRoom)
        this.props.setImages(this.state.RoomImages)
        this.props.setAmount(this.state.RoomAmount)
    } 
    handalerPushRoomToDatabase=()=>{
        firebase.database().ref('RoomDB/'+this.props.room.id).update({
            ID : this.props.room.id,
            Roomname : this.props.room.roomname,
            Price : this.props.room.price,
            Categolry : this.props.room.categolry,
            Picture : this.props.room.images,
            Details :this.props.room.description,
            Amount : this.props.room.amount
        }).then(()=>{
            this.setState({
                Request :"001"
            });
        }).catch(console.error);
    }
    handlerCancel=()=>{
        this.props.setID(null)
        this.props.setRoomName(null)
        this.props.setPrice(null)
        this.props.setDescription(null)
        this.props.setCategolry(null)
        this.props.setImages(null)
        this.props.setAmount(null)
    }
    handlerGetValuefromDB=()=>{
        return firebase.database().ref('RoomDB/').once('value').then((snapshort)=>{
            var itemsKey = []
            let id = 0
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                itemsKey.push(childData)
            })
            var keys = Object.keys(itemsKey)
            for(var i=0;i<keys.length;i++){
                var k = keys[i]
                id = itemsKey[k].ID
                if(this.props.room.id === id){
                    this.setState({
                        RoomId : itemsKey[k].ID,
                        RoomName : itemsKey[k].Roomname,
                        CategolyRoom : itemsKey[k].Categolry,
                        RoomDescription : itemsKey[k].Details,
                        RoomImages : itemsKey[k].Picture,
                        RoomAmount : itemsKey[k].Amount,
                        RoomPrice : itemsKey[k].Price,
                    });
                }
            }
        }).then(()=>{
            this.props.setID(this.state.RoomId)
            this.props.setRoomName(this.state.RoomName)
            this.props.setPrice(this.state.RoomPrice)
            this.props.setDescription(this.state.RoomDescription)
            this.props.setCategolry(this.state.CategolyRoom)
            this.props.setImages(this.state.RoomImages)
            this.props.setAmount(this.state.RoomAmount)
        }).catch(console.error);
    }
    //Lifecycle
    componentDidMount=()=>{
        if(this.props.login.username!==null&&this.props.member.typemember!=="Member"){
            this.hanlerCategolryRoom()
            this.handlerGetValuefromDB()
        }
    }
    render(){
        console.log(this.state)
        let ViewAddRoom = null 
        let Modal = null
        //Modals
        Modal = <div className="modal fade" id="AddRoom" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Rooms</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Would you like to craete a new room?
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={this.handalerPushRoomToDatabase}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      if(this.state.Request==="001"){
        Modal = <div className="modal fade" id="AddRoom" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Rooms</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              You just already created new room.
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      }
        //View
        if(this.props.login.username === null){
            ViewAddRoom = <div></div>
        }if(this.props.login.username !== null){
            ViewAddRoom =  <div>
                           <div className="h1 text-center">Edit new room</div>
                <center><div className="card" data-aos="zoom-in" style={{width : "800px"}}>
                                    <img className="img-fluid" src={this.state.RoomImages} alt="Card image cap"/>
                                        <div className="card-body">
                                        <h1 className="card-title"></h1>
                                        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold",width : "fit-content",float : "left"}}><i class="fas fa-archway"></i> Room name</div>  </p><br/>
                                        <p className="card-text"><input type="text"className="form-control" style={{width : "100%"}} placeholder="roomname" onChange={this.handalerRoomname} value={this.state.RoomName}/></p>
                                        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold",width : "fit-content",float : "left"}}><i class="fas fa-dollar-sign"></i> Price</div>  </p><br/>
                                        <p className="card-text"><input type="number"className="form-control" style={{width : "100%"}} placeholder="Price" onChange={this.handalerRoomPrice} value={this.state.RoomPrice}/></p>
                                        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold",width : "fit-content",float : "left"}}><i class="fas fa-sort-amount-up"></i> Amount</div>  </p><br/>
                                        <p className="card-text"><input type="number"className="form-control" style={{width : "100%"}} placeholder="Amount" onChange={this.handalerRoomAmount} value={this.state.RoomAmount}/></p>
                                        <div className="container">
                                        <p className="palagrapht"> <div className="float-left" style={{fontSize: "20px" ,fontWeight : "bold"}}><i class="fas fa-suitcase-rolling"></i> CategolyRoom</div> </p><br/>
                                        <select id="categolryroom"className="form-control" value={this.state.CategolyRoom} onChange={this.hanlerSelect}>
                                        <option value="default">default</option>
                                        </select>
                                        </div>
                                        <p className="palagrapht"> <div className="float-left" style={{fontSize: "20px" ,fontWeight : "bold",width : "fit-content",float : "left"}} > <i class="fas fa-asterisk"></i> Details</div>  </p><br/>
                                        <p className="card-title"><textarea  onChange={this.handlerDetails} value={this.state.RoomDescription} class="form-control" rows="5"/></p>
                                        <p className="card-text"><input type="file"className="form-control" style={{width : "100%"}} placeholder="Price" onChange={this.onchoosePicture}/></p>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width : this.state.progress+"%"}} aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100">{this.state.progress}%</div>
                                        </div>
                                        <div className="conrainer"style={{padding : "10px"}}>
                                            <div className="row" >
                                                <div className="col">
                                                <button type="button" className="btn btn-success" style={{width : "100%"}} onClick={this.handalerPushRoomToProps} data-toggle="modal" data-target="#AddRoom">Success</button>
                                                </div>  
                                                <div className="col">
                                                <NavLink exact to="/SuperUserEditRoom"><button type="button" className="btn btn-danger" onClick={this.handlerCancel} style={{width : "100%"}}>Cancel</button></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                             </div></center></div>
        }
        return(
            <div className="container">
                {ViewAddRoom}
                {Modal}
            </div>

        );
    }
}

export default connect(mapStateToProps,Roombean) (EditRoomView)