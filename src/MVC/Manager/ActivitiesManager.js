import React from 'react'
import EditActivity from '../Component/ViewList/EditReservation/EditActivity'
import DeleteActivity from '../Component/ViewList/DeleteReservation/DeleteActivity'
import ViewActivity from '../Component/ViewList/MemberReservation/MemberViewActivity'
import ActivityReservationList from '../Component/ViewList/ReservationList/ActivityReservationList'

const activities =(props)=>(
    <div className="container" style={{paddingTop:"20px"}}>
        <div className="card shadow-lg">
            <div className="card-body">
            {
            props.activityList.map(card=>{
                if(props.status === "Edit"){
                    return <EditActivity
                    Activityname = {card.Activityname}
                    Categolry = {card.Categolry}
                    Details = {card.Details}
                    Picture = {card.Picture}
                    Price = {card.Price}
                    ID = {card.ID}
                />
                }
                if(props.status === "Delete"){
                    return <DeleteActivity
                    Activityname = {card.Activityname}
                    Categolry = {card.Categolry}
                    Details = {card.Details}
                    Picture = {card.Picture}
                    Price = {card.Price}
                    ID = {card.ID}
                />
                }
                if(props.status === "View"){
                    return <ViewActivity
                    Activityname = {card.Activityname}
                    Categolry = {card.Categolry}
                    Details = {card.Details}
                    Picture = {card.Picture}
                    Price = {card.Price}
                    ID = {card.ID}
                />
                }
                if(props.status === "Reservation"){
                    return <ActivityReservationList
                    Activityname = {card.Activityname}
                    Categolry = {card.Categolry}
                    Details = {card.Details}
                    Picture = {card.Picture}
                    Price = {card.Price}
                    ID = {card.ID}
                />
                }
            })
        }
            </div>
        </div>
        
    </div>
)

export default activities