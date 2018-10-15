import React,{Component} from 'react'
import Logo from '../../../../Images/logo.png'
import CaroulselEventList from '../../../Controler/Controller/ControllerEventList/CaroulselEventList'
class Homepages extends Component{
    render(){
        return(
            <div className="container" style={{paddingTop:"20px"}}>
            <h1 className="text-left mb-3">About Comsaed</h1>
            <hr style={{height:"2px",backgroundColor : "#2E2E2E"}}/>
            <div className="card shadow-lg" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div className="card-body">
            <div className="row no-gutters">
                    <div className="col-auto">
                        <div className="card mb-3 shadow-lg">
                        <div className="card-body" >
                            <iframe width="427" height="255" src="https://www.youtube.com/embed/smKYrhh-W3g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                        </div>
                    </div>
                    <div className="col-6" style={{paddingLeft:"20px"}}>
                    <div className="h1 text-left" style={{fontSize:"50px",color:"black"}}>
                        <div className="row">
                            <div className="col-auto">Welcome to</div>
                            <div className="col-auto"><img src={Logo} alt="Logo" height="80" width="auto" /></div>
                        </div>
                    </div><br/>
                    <div className="text-left">คำแสด ริเวอร์ แคว รีสอร์ท มอบความสะดวกสบายให้กับวันหยุดพักผ่อนของท่านด้วยบรรยากาศ สวนป่าเขียวขจี พร้อมกิจกรรมสนุกสนานเพลิดเพลิน และ ห้องพัก ที่ให้ความรู้สึกเหมือนบ้าน และมีความเป็นส่วนตัวสูงกว่ามาตรฐานทั่วไป</div>
                    </div>
                </div>
            </div>
            </div>
            <div style={{paddingTop:"50px"}}>
                <CaroulselEventList/>
            </div>
            <div style={{paddingTop:"50px"}}><h1 className="text-left mb-3">Comsaed Presentation</h1></div>
            <hr style={{height:"2px",backgroundColor : "#2E2E2E"}}/>
            <div className="card shadow-lg mb-5" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <div className="card-body">
                <iframe className="embed-responsive embed-responsive-16by9" width="1000" height="720" src="https://www.youtube.com/embed/E74I5x7mqbQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>
            </div>
        );
    }
}

export default Homepages