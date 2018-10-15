import React,{Component} from 'react';
import User from '../../MVC/Component/ViewList/User'
import './Fillter.css'
class Users extends Component{
    state = {
        text : ""
    }
    hanlerSearching=(event)=>{
        this.setState({
            text : event.target.value
        })
      }
    render(){
        let fillteredContract = this.props.userList.filter(card=>{
            return card.Name.indexOf(this.state.text)!== -1
        });
        return(
            <div className="container-fluid">
                 <h1 className="text-left" style={{fontSize:"60px",width:"fit-content"}}>This is your member profiles<br/></h1>
                <input class="form-control" id="myInput" type="text" placeholder="Name.." onChange={this.hanlerSearching}/>
                <br/>
                <div className="card-columns ">
                              {
                    fillteredContract.map(card=>{
                    return <User
                    Username = {card.Username}
                    ID = {card.ID}
                    Name = {card.Name}
                    Lastname = {card.Lastname}
                    Status = {card.Status}
                    Email = {card.Email}
                    Phone = {card.Phone}
                    Picture = {card.Picture}
                    />
                    })
                }                
                </div>
        </div>
        )
    }
}
    
   


export default Users