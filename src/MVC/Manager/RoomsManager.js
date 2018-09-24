import React from 'react'
import EditRoom from '../Component/ViewList/EditReservation/EditRoom'
import DeleteRoom from '../Component/ViewList/DeleteReservation/DeleteRoom'
const rooms = (props) =>(
    <div className="card-columns">
        {
            props.roomList.map(card=>{
                if(props.status==="Edit"){
                return <EditRoom
                    Roomname = {card.Roomname}
                    Categolry = {card.Categolry}
                    Price = {card.Price}
                    Picture = {card.Picture}
                    ID ={card.ID}
                />
                }
                if(props.status==="Delete"){
                    return <DeleteRoom
                        Roomname = {card.Roomname}
                        Categolry = {card.Categolry}
                        Price = {card.Price}
                        Picture = {card.Picture}
                        ID ={card.ID}
                    />
                    }
            })
        }
        </div>
)

export default rooms