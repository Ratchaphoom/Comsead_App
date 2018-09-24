import React from 'react'
import EditEvent from '../Component/ViewList/EditReservation/EditEvent'
import DeleteEvent from '../Component/ViewList/DeleteReservation/DeleteEvent'

const events =(props)=>(
    <div className="card-columns ">
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
            })
        }
    </div>
)

export default events