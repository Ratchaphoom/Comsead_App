import React from 'react'
import EditActivity from '../Component/ViewList/EditReservation/EditActivity'
import DeleteActivity from '../Component/ViewList/DeleteReservation/DeleteActivity'
const activities =(props)=>(
    <div className="card-columns ">
         {
            props.activityList.map(card=>{
                if(props.status === "Edit"){
                    return <EditActivity
                    Activityname = {card.Activityname}
                    Categolry = {card.Categolry}
                    Details = {card.Details}
                    Picture = {card.Picture}
                    ID = {card.ID}
                />
                }
                if(props.status === "Delete"){
                    return <DeleteActivity
                    Activityname = {card.Activityname}
                    Categolry = {card.Categolry}
                    Details = {card.Details}
                    Picture = {card.Picture}
                    ID = {card.ID}
                />
                }
                
            })
        }
    </div>
)

export default activities