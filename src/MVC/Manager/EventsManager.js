import React from 'react'
import EditEvent from '../Component/ViewList/EditReservation/EditEvent'
import DeleteEvent from '../Component/ViewList/DeleteReservation/DeleteEvent'
import EventView from '../Component/ViewList/MemberReservation/MemberViewEvent'
import EventReservationList from '../Component/ViewList/ReservationList/EventReservationList'
const events =(props)=>(
    <div className="container" style={{paddingTop:"20px"}}>
        <div className="card shadow-lg">
            <div className="card-body">
            {
            props.eventList.map(card=>{
                if(props.status==="Edit"){
                    return <EditEvent
                    Eventname = {card.Eventname}
                    Price = {card.Price}
                    Details = {card.Details}
                    Picture = {card.Picture}
                    ID = {card.ID}
                />
                }
                if(props.status==="Delete"){
                    return <DeleteEvent
                    Eventname = {card.Eventname}
                    Price = {card.Price}
                    Details = {card.Details}
                    Picture = {card.Picture}
                    ID = {card.ID}
                />
                }
                if(props.status==="View"){
                    return <EventView
                    Eventname = {card.Eventname}
                    Price = {card.Price}
                    Details = {card.Details}
                    Picture = {card.Picture}
                    ID = {card.ID}
                />
                }
                if(props.status==="Reservation"){
                    return <EventReservationList
                    Eventname = {card.Eventname}
                    Price = {card.Price}
                    Details = {card.Details}
                    Picture = {card.Picture}
                    ID = {card.ID}
                />
                }
            })
        }
            </div>
        </div>
        
    </div>
)

export default events