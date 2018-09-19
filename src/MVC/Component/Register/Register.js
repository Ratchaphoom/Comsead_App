import React,{Component} from 'react'
import {connect} from 'react-redux'

class Register extends Component{
    state={
        id: null,
        picture: null,
        typemember: null,
        address: null,
        phone: null,
        email: null,
        firstName: null,
        lastname: null,
    }
    onFirstNameChange=(event)=>{
        this.setState({
            firstName: event.target.value
        })
        this.props.setName(event.target.value);
    }
    onLastNameChange=(event)=>{
        this.setState({
            lastname: event.target.value
        })
        this.props.setLastname(event.target.value)
    }
    onPictureChange=(event)=>{
        this.setState({
            picture: event.target.value
        })
        this.props.setPicture(event.target.value)
    }
    onAddressChange=(event)=>{
        this.setState({
            address: event.target.value
        })
        this.props.setAddress(event.target.value)
    }
    onPhoneChange=(event)=>{
        this.setState({
            phone: event.target.value
        })
        this.props.setPhone(event.target.value)
    }
    onEmailChange=(event)=>{
        this.setState({
            email: event.target.value
        })
        this.props.setEmail(event.target.value)
    }
    onSubmitClick=()=>{
        
    }
    render(){
        return (
            <div>
                firstName <input type="text" name="firstName" onChange={this.onFirstNameChange}/>
                lastname <input type="text" name="lastname" onChange={this.onLastNameChange}/>
                picture <input type="file" name="picture" onChange={this.onPictureChange}/>
                address <textarea rows="4" cols="50" name="comment" onChange={this.onAddressChange}/>
                phone <input type="tel" name="phone" onChange={this.onPhoneChange}/>
                email<input type="email" name="email" onChange={this.onEmailChange}/>

                <input type="submit" value="Register" name="submit" onClick={this.onSubmitClick}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      member : state.user,
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