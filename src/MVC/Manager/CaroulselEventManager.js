import React,{Component} from 'react'
import $ from 'jquery'
import '../../MVC/Component/CSS/cardcarousel.css'
import CalouselEvents from '../Component/ViewList/MemberReservation/CorouselEvent'
import Children from '../../Images/children-1807511.jpg'
import {NavLink} from 'react-router-dom'

class CalouselEvent extends Component{
    componentDidMount=()=>{
        $(document).ready(function() {
            $("#myCarousel").on("slide.bs.carousel", function(e) {
              var $e = $(e.relatedTarget);
              var idx = $e.index();
              var itemsPerSlide = 3;
              var totalItems = $(".carousel-item").length;
          
              if (idx >= totalItems - (itemsPerSlide - 1)) {
                var it = itemsPerSlide - (totalItems - idx);
                for (var i = 0; i < it; i++) {
                  // append slides to end
                  if (e.direction == "left") {
                    $(".carousel-item")
                      .eq(i)
                      .appendTo(".carousel-inner");
                  } else {
                    $(".carousel-item")
                      .eq(0)
                      .appendTo($(this).find(".carousel-inner"));
                  }
                }
              }
            });
          });
          
    }
    render(){
        return(
            <div className="container-fluid">
            <h1 className="text-left">Event commingsoon</h1>
            <hr style={{height:"2px",backgroundColor : "#2E2E2E"}}/>
            <div className="card shadow-lg" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <div className="card-body">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner row w-100 mx-auto">
                <div className="carousel-item col-md-4 active">
                    <div className="card shadow-lg" style={{width: "18rem"}}>
                        <img className="card-img-top" src={Children} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title text-left">การตกปลา</h5>
                            <p className="card-text text-left">การตกปลาเป็นกิจกรรมที่สนุกและน่าตื่นเต้นที่สามารถเพลิดเพลินได้ตลอดทั้งปีในสวีเดน ทุกคนมีสิทธิ์ กลางแจ้งที่เรียกว่า สิทธิ์ในการเข้าถึงสถานที่สาธารณะ โดยต้องใช้สิทธิ์เหล่านี้อย่างมีความรับผิดชอบ</p>
                            <NavLink exact to="/Event" className="btn btn-primary">Go Event Page</NavLink>
                        </div>
                    </div>
                </div>
                {
                    this.props.eventList.map(card=>{
                        
                            return <CalouselEvents
                            Eventname = {card.Eventname}
                            Price = {card.Price}
                            Details = {card.Details}
                            Picture = {card.Picture}
                            ID = {card.ID}
                        />
                    })
                }
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <i className="fas fa-angle-left fa-3x" style={{color:"#212121"}} aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="fas fa-angle-right fa-3x" style={{color:"#212121"}} aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
                </div>
            </div>
           
            </div>
        )
    }
}

export default CalouselEvent