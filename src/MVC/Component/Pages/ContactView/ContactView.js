import React,{Component} from 'react'
import Address from '../../../../Images/business.png'
import Phone from '../../../../Images/fax.png'
import startup from '../../../../Images/startup.png'
import archive from '../../../../Images/archive.png'
import '../../CSS/BackToTop.css'
import * as firebase from 'firebase'
import mapStateToProp from '../../../Controler/Mapstate/Mapstate'
import Contactbean from '../../../Models/Contactbean'
import {connect} from 'react-redux'

class ContactView extends Component{
    state={
        contactId : null,
        name : null,
        email : null,
        phone : null,
        message : null,
        request : null,
        updateId : null,
        DateofContact : null,
        check1: null,
        check2: null,
        check3: null,
        check4: null,

    }
    componentDidMount=()=>{
        this.handlerGetLastKey()
        let d = new Date();
        this.setState({
            DateofContact : (d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear()
        })
    }

    componentDidUpdate=()=>{
        if(this.state.updateId === "001"){
            this.handlerGetLastKey()
        }
    }
    handlerName=(event)=>{
        this.setState({
            name : event.target.value
        })
    }
    handlerEmail=(event)=>{
        this.setState({
            email : event.target.value
        })
    }
    handlerPhone=(event)=>{
        this.setState({
            phone : event.target.value
        })
    }
    handlermessage=(event)=>{
        this.setState({
            message : event.target.value
        })
    }
    handlerSetDataToDatabase=()=>{
        if(this.state.name!==null&&this.state.email!==null&&this.state.phone!==null&&this.state.message!==null){
            firebase.database().ref('ContactDB/'+this.props.contact.id).set({
                ID : this.props.contact.id,
                Contactname : this.props.contact.name,
                Contactemail : this.props.contact.email,
                Contactphone : this.props.contact.phone,
                Contactmessage : this.props.contact.message,
                DateofContact :this.state.DateofContact
            }).then(()=>{
                this.props.setContactname(null)
                this.props.setContactemail(null)
                this.props.setContactphone(null)
                this.props.setContactmessage(null)
                this.setState({
                    updateID :"001",
                    request : "001",
                    name : null,
                    email :null,
                    phone : null,
                    message : null
                })
            }).catch(console.error)
        }  
    }
    handlerSetDataToProp=()=>{
        if(this.state.name!==null&&this.state.email&&this.state.phone&&this.state.message){
            this.props.setId(this.state.contactId)
            this.props.setContactname(this.state.name)
            this.props.setContactemail(this.state.email)
            this.props.setContactphone(this.state.phone)
            this.props.setContactmessage(this.state.message)
        }
        this.handlerCheckvalue()
    }
    handlerClearData=()=>{
            this.props.setContactname(null)
            this.props.setContactemail(null)
            this.props.setContactphone(null)
            this.props.setContactmessage(null)
        this.setState({
            name : null,
            email :null,
            phone : null,
            message : null
        });
            
    }
    handlerGetLastKey=()=>{
        return firebase.database().ref('ContactDB/').once('value').then((snapshort)=>{
            var itemsKey = []
            let id = 0
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                itemsKey.push(childData)
            })
            var contact = Object.keys(itemsKey)
            for(var i=0;i<contact.length;i++){
                var k = contact[i]
                id = itemsKey[k].ID
            }
                this.setState({
                    contactId : id+1,
                    updateId : "000"
                })
        }).catch(console.error);
    }
    handlerCheckvalue=()=>{
        let check1  = null
        let check2  = null
        let check3  = null
        let check4  = null

        let Name = this.state.name
        let Email = this.state.email
        let Phone = this.state.phone

        if(this.state.name === null || this.state.name === "" || Name.length < 2 ){
            check1 = "Please input name && more than 2 letter."
        }if(this.state.email === null||this.state.email === ""  || Email.length < 2||!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)){
            check2 = "Please input email && more than 2 letter."
        }if(this.state.phone === null||this.state.phone === ""  || Phone.length < 10){
            check3 = "Please input phone && more than 10 letter."
        }if(this.state.message === null||this.state.message === ""){
            check4 = "Please input message"
        }
        
        this.setState({
            check1 : check1,
            check2 : check2,
            check3 : check3,
            check4 : check4,
        })
    }
    render(){
        let Modal = null
        Modal = <div className="modal fade" id="Contact" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Contact Alert</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Would you like to send your contact?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success" onClick={this.handlerSetDataToDatabase}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
        if(this.state.request === "001"){
            Modal = <div className="modal fade" id="Contact" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Contact Alert</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Your contact has been send.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        }
        return(
            <div className="container">
                <div className="h1 text-left mb-3" style={{paddingTop:"20px"}}>Contact Us</div>
                <hr style={{height:"2px",backgroundColor : "#2E2E2E"}}/>
                <div className="card shadow-lg" data-aos="fade-right"
                                                data-aos-offset="300"
                                                data-aos-easing="ease-in-sine">
                    <div className="card-body">
                    <div className="row">
                        <div className="col-auto"><img src={Address} alt="Logo" height="" width="auto" /></div>
                        <div className="col-auto"><div className="h7 text-left">89 moo 5 Ladya Amphur Muang Kanchanaburi 71190 Thailand</div></div>
                    </div>
                    <div className="row">
                        <div className="col-auto"><img src={Phone} alt="Logo" height="" width="auto" /></div>
                        <div className="col-auto"><div className="h7 text-left">TEL. 034-540-661-5 FAX. 034-589-094, 034-589-000</div></div>
                    </div>

                     <div className="row">
                        <div className="col-auto"><img src={startup} alt="Logo" height="" width="auto" /></div>
                        <div className="col-auto"><div className="h7 text-left">www.comsaed.com</div></div>
                    </div>

                     <div className="row">
                        <div className="col-auto"><img src={archive} alt="Logo" height="" width="auto" /></div>
                        <div className="col-auto"><div className="h7 text-left">comsaed_info@hotmail.com</div></div>
                    </div>
                    </div>
                </div>
                <div className="h1 text-left mb-3" style={{paddingTop:"20px"}}>Bangkok Office</div>
                <hr style={{height:"2px",backgroundColor : "#2E2E2E"}}/>
                <div className="card shadow-lg" data-aos="fade-right"
                                                data-aos-offset="300"
                                                data-aos-easing="ease-in-sine">
                    <div className="card-body">
                    <div className="row">
                        <div className="col-auto"><img src={Address} alt="Logo" height="" width="auto" /></div>
                        <div className="col-auto"><div className="h7 text-left">589/11 Soi Krajangnate Pracha-uthit Rd. Wangtonglang. BKK 10310 Thailand</div></div>
                    </div>
                    <div className="row">
                        <div className="col-auto"><img src={Phone} alt="Logo" height="" width="auto" /></div>
                        <div className="col-auto"><div className="h7 text-left">TEL. 02-934-8111 {"(Auto 4 lines)"} FAX. 02-934-8278</div></div>
                    </div>

                     <div className="row">
                        <div className="col-auto"><img src={startup} alt="Logo" height="" width="auto" /></div>
                        <div className="col-auto"><div className="h7 text-left">www.comsaed.com</div></div>
                    </div>

                     <div className="row">
                        <div className="col-auto"><img src={archive} alt="Logo" height="" width="auto" /></div>
                        <div className="col-auto"><div className="h7 text-left">comsaed_info@hotmail.com</div></div>
                    </div>
                    </div>
                </div>
                <div className="h1 text-left mb-3" style={{paddingTop:"20px"}}>Comsaed River Kwai Resort</div>
                <hr style={{height:"2px",backgroundColor : "#2E2E2E"}}/>
                <div className="card shadow-lg" data-aos="fade-right"
                                                data-aos-offset="300"
                                                data-aos-easing="ease-in-sine">
                    <div className="card-body">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.4673399302087!2d99.38808741528521!3d14.108591690117391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e39d674bf7b1d5%3A0x44bb4289b063b76b!2z4LiE4Liz4LmB4Liq4LiUIOC4o-C4tOC5gOC4p-C4reC4o-C5jOC5geC4hOC4pyDguKPguLXguKrguK3guKPguYzguJc!5e0!3m2!1sth!2sth!4v1538405014384" width="1050" height="300" frameborder="0" style={{border:"0px"}} allowfullscreen></iframe>
                    </div>
                </div>
                <div className="h1 text-left mb-3" style={{paddingTop:"20px"}}>Contact Form</div>
                <hr style={{height:"2px",backgroundColor : "#2E2E2E"}}/>
                <div className="card shadow-lg" data-aos="fade-right"
                                                data-aos-offset="300"
                                                data-aos-easing="ease-in-sine">
                    <div className="card-body">
                    <div className="row">
                        <div className="col-6 col-md-4">
                        <h4 className="text-left">Name</h4><br/>  <div className="h4 text-left" style={{fontSize: "15px",color:"red" }}> {this.state.check1}</div>
                        <input type="text" className="form-control" id="exampleFormControlInput1" value={this.state.name} onChange={this.handlerName} placeholder="Tongdee Jaikeaw"/>
                        </div>
                        <div className="col-6 col-md-4">
                        <h4 className="text-left">Email</h4><br/>  <div className="h4 text-left" style={{fontSize: "15px",color:"red" }}> {this.state.check2}</div>
                        <input type="email" className="form-control" id="exampleFormControlInput1" value={this.state.email} onChange={this.handlerEmail}  placeholder="name@example.com"/>
                        </div>
                        <div className="col-6 col-md-4">
                        <h4 className="text-left">Mobile</h4><br/>  <div className="h4 text-left" style={{fontSize: "15px",color:"red" }}> {this.state.check3}</div>
                        <input type="number" className="form-control" id="exampleFormControlInput1" value={this.state.phone} onChange={this.handlerPhone}  placeholder="0879987456"/>
                        </div>

                    </div>
                    <h4 className="text-left">Message</h4><br/>  <div className="h4 text-left" style={{fontSize: "15px",color:"red" }}> {this.state.check4}</div>
                    <div><textarea className="form-control" id="exampleFormControlTextarea1" value={this.state.message}  onChange={this.handlermessage}  rows="3"></textarea></div>
                    </div>
                </div>
                <div className="row float-right">
                    <div className="col-auto"><button type="button" class="btn btn-warning btn-lg float-right" onClick={this.handlerClearData}>CLEAR CONTACT</button></div>
                    <div className="col-auto"><button type="button" class="btn btn-success btn-lg float-right" data-toggle="modal" data-target="#Contact" onClick={this.handlerSetDataToProp}>SEND CONTACT</button></div>
                </div>
                {Modal}
            </div>
        )
    }
}

export default connect(mapStateToProp,Contactbean) (ContactView)