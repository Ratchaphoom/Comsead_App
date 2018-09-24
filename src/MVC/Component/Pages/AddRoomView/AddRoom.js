import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
import mapStateToProps from '../../../Controler/Mapstate/Mapstate'
import Roombean from '../../../Models/Roombean'
class AddRoom extends Component {
    state={
        RoomId : null,
        RoomName : null,
        CategolyRoom : null,
        PriceRoom : null,
        RoomDescription : null,
        RoomImages : null,
        RoomAmount : null,
        RoomPrice : null,
        Request : null
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
        ,arr = ["Deluxe Room","Suite Room","Mini-Suite Room","Standars","Deluxe","No Categolry"];
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
        firebase.database().ref('RoomDB/'+this.props.room.id).set({
            ID : this.props.room.id,
            Roomname : this.props.room.roomname,
            Price : this.props.room.price,
            Categolry : this.props.room.categolry,
            Picture : this.props.room.images,
            Details :this.props.room.description,
            Amount : this.props.room.amount
        }).then(()=>{
            this.props.setID(null)
            this.props.setRoomName(null)
            this.props.setPrice(null)
            this.props.setDescription(null)
            this.props.setCategolry(null)
            this.props.setImages(null)
            this.props.setAmount(null)
            this.setState({
                Request : "001",
                RoomName : null,
                RoomAmount : null,
                RoomDescription : null,
                RoomPrice : null,
                RoomImages : null
            })
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
    handlerLastID=()=>{
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
            }
                this.setState({
                    RoomId : id+1,
                    Request : "000"
                })
        }).catch(console.error);
    }
    //Lifecycle
    componentDidMount=()=>{
        if(this.props.login.username!==null&&this.props.member.typemember!=="Member"){
            this.hanlerCategolryRoom()
            this.handlerLastID()
        }
    }
    componentDidUpdate=()=>{
        if(this.props.login.username!==null&&this.props.member.typemember!=="Member"&&this.state.Request === "001"){
            this.handlerLastID()
        }
    }
    render(){
        
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
                            <div className="Fillter">Add new rooms</div>
                <center><div className="card" data-aos="zoom-in" style={{width : "600px"}}>
                                    <img className="img-fluid" src={this.state.RoomImages} alt="Card image cap"/>
                                        <div className="card-body">
                                        <h1 className="card-title"></h1>
                                        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold",width : "fit-content",float : "left"}}>Room name</div>  </p><br/>
                                        <p className="card-text"><input type="text"className="form-control" style={{width : "100%"}} placeholder="roomname" onChange={this.handalerRoomname}/></p>
                                        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold",width : "fit-content",float : "left"}}>Price</div>  </p><br/>
                                        <p className="card-text"><input type="number"className="form-control" style={{width : "100%"}} placeholder="Price" onChange={this.handalerRoomPrice}/></p>
                                        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold",width : "fit-content",float : "left"}}>Amount</div>  </p><br/>
                                        <p className="card-text"><input type="number"className="form-control" style={{width : "100%"}} placeholder="Amount" onChange={this.handalerRoomAmount}/></p>
                                        <div className="container">
                                        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold"}}>CategolyRoom</div> </p><br/>
                                        <select id="categolryroom"className="form-control" value={this.state.Typemember} onChange={this.hanlerSelect}>
                                        <option value="default">default</option>
                                        </select>
                                        </div>
                                        <p className="palagrapht"> <div style={{fontSize: "20px" ,fontWeight : "bold",width : "fit-content",float : "left"}}>Details</div>  </p><br/>
                                        <p className="card-title"><textarea  onChange={this.handlerDetails} class="form-control" rows="5"/></p>
                                        <p className="card-text"><input type="file"className="form-control" style={{width : "100%"}} placeholder="Price" onChange={this.onchoosePicture}/></p>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width : this.state.uploadValue}} aria-valuenow={this.state.uploadValue} aria-valuemin="0" aria-valuemax="100">{this.state.uploadValue}%</div>
                                        </div>
                                        <div className="conrainer"style={{padding : "10px"}}>
                                            <div className="row" >
                                                <div className="col">
                                                <button type="button" className="btn btn-success" style={{width : "100%"}} onClick={this.handalerPushRoomToProps} data-toggle="modal" data-target="#AddRoom">Success</button>
                                                </div>  
                                                <div className="col">
                                                <button type="button" className="btn btn-danger" onClick={this.handlerCancel} style={{width : "100%"}}>Cancel</button>
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

export default  connect(mapStateToProps,Roombean) (AddRoom)