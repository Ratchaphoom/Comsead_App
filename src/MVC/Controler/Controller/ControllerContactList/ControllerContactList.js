import React,{Component} from 'react'
import ContactManager from '../../../Manager/ContactManager'
import * as firebase from 'firebase'
class ControllerContactList extends Component{
    state={
       contactList : []
    }
    componentDidMount=()=>{
        firebase.database().ref('ContactDB/').once('value').then((snapshort)=>{
            var items = []
            let contactList = []
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                items.push(childData)
            })
            var rooms = Object.keys(items)
            for(var i=0;i<rooms.length;i++){
                let k = rooms[i]
                contactList.push({
                    ...items[k]
                })
            }
            this.setState({
                contactList : contactList.reverse()
              })
        })
    }
    componentDidUpdate=()=>{
        firebase.database().ref('ContactDB/').once('value').then((snapshort)=>{
            var items = []
            let contactList = []
            snapshort.forEach(function (childSnapshort) {
                var childData = childSnapshort.val()
                items.push(childData)
            })
            var rooms = Object.keys(items)
            for(var i=0;i<rooms.length;i++){
                let k = rooms[i]
                contactList.push({
                    ...items[k]
                })
            }
            this.setState({
                contactList : contactList.reverse()
              })
        })
    }
    render(){
        return(
            <div className="container">
                <ContactManager contactList={this.state.contactList}/>
            </div>
        )
    }
}

export default ControllerContactList