import React, { Component } from 'react';
import '../CSS/Footer.css'
import Logo from '../../../Images/logo.png'
import facebook from '../../../Images/facebook.svg'
import instagram from '../../../Images/instagram.svg'
import twitter from '../../../Images/twitter.png'
import {NavLink} from 'react-router-dom'

class FooterPage extends Component{
    render(){
        return(
            <footer>
                <div className="Footerbg">
                <div className="container-fluid" style={{paddingTop:"700px"}}>
                <div className="row">
                    <div className="col"> 
                    <h4 className="text-left" style={{color:"white"}}>Link</h4>
                    <hr style={{height:"1px",backgroundColor:"white"}}/>
                    <NavLink exact to="/Contact"><h6 className="text-left" style={{color:"white"}}>Contact us</h6></NavLink>

                    </div>
                    <div className="col"> 
                    <h4 className="text-left" style={{color:"white"}}>Links</h4>
                    <hr style={{height:"1px",backgroundColor:"white"}}/>
                    <NavLink exact to="/Accomodation"><h6 className="text-left" style={{color:"white"}}>Accommodation</h6></NavLink>
                    <NavLink exact to="/Activities"><h6 className="text-left" style={{color:"white"}}>Activity</h6></NavLink>
                    <NavLink exact to="/Event"><h6 className="text-left" style={{color:"white"}}>Event</h6></NavLink>

                    </div>
                    <div className="col-auto"> 
                        <div className="row" style={{paddingTop:"80px",width:"fit-content",alignItems:"center"}}>
                            <div className="col-auto"><img src={facebook} alt="Logo" height="40" width="auto" /></div>
                            <div className="col-auto"><img src={instagram} alt="Logo" height="40" width="auto" /></div> 
                            <div className="col-auto"><img src={twitter} alt="Logo" height="40" width="auto" /></div>
                        </div>
                    </div>
                    <div className="col"> 
                    <h4 className="text-right" style={{color:"white"}}>Comsaed River Kwai Resort</h4>
                    <hr style={{height:"1px",backgroundColor:"white"}}/>
                    <h6 className="text-right" style={{color:"white"}}>89 Moo 5 Ladya Amphur Muang <br/>Kanchanaburi Thailand 71190</h6>
                    <h6 className="text-right" style={{color:"white"}}>Tel : 034-540-661-5</h6>
                    <h6 className="text-right" style={{color:"white"}}>Fax : 034 589 094, 034 589 000</h6>
                    <h6 className="text-right" style={{color:"white"}}>Email : comsead_info@hotmail.com</h6>
                    </div>
                </div>
                
                </div>
                <div className="container-fluid">
                <hr style={{height:"1px",backgroundColor:"#007E33"}}/>
                <div className="row">
                    <div className="col-auto"><img src={Logo} alt="Logo" height="40" width="auto" /></div>
                    <div className="col-auto"><h6 className="text-right" style={{color:"white",alignItems:"center"}}>" ธรรมชาติ บอกรักคุณ... ทุกวันที่นี่ ", คำแสด ริเวอร์แคว รีสอร์ท</h6></div>
                    <div className="col-sm-8"><h6 className="text-right" style={{color:"white"}}>© 2018 COMSAED RIVER KWAI RESORT - ALL RIGHTS RESERVED. COMSAED.COM</h6></div>
                </div>
                </div>

                </div>
            </footer>
        )
    }
}

export default FooterPage