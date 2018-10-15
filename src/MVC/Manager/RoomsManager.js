import React,{Component}from 'react'
import EditRoom from '../Component/ViewList/EditReservation/EditRoom'
import DeleteRoom from '../Component/ViewList/DeleteReservation/DeleteRoom'
import RoomView from '../Component/ViewList/MemberReservation/MemberViewRoom'
import RoomReservationList from '../Component/ViewList/ReservationList/RoomReservationList'

class rooms extends Component{

    render(){
        let fillteredContract = null
        let View = null
        if(this.props.namepage!==null){
             fillteredContract = this.props.roomList.filter(card=>{
                return card.Roomname.indexOf(this.props.namepage)!== -1
            });
            View = <div>
        {
           fillteredContract.map(card=>{
                if(this.props.status==="Edit"){
                return <EditRoom
                    Roomname = {card.Roomname}
                    Categolry = {card.Categolry}
                    Price = {card.Price}
                    Picture = {card.Picture}
                    ID ={card.ID}
                    Details = {card.Details}

                />
                }
                if(this.props.status==="Delete"){
                    return <DeleteRoom
                        Roomname = {card.Roomname}
                        Categolry = {card.Categolry}
                        Price = {card.Price}
                        Picture = {card.Picture}
                        ID ={card.ID}
                        Details = {card.Details}

                    />
                    }
                    if(this.props.status==="View"){
                        return <RoomView
                            Roomname = {card.Roomname}
                            Categolry = {card.Categolry}
                            Price = {card.Price}
                            Picture = {card.Picture}
                            ID ={card.ID}
                            Namepage = {this.props.namepage}
                            Details = {card.Details}
                        />
                        }
                    if(this.props.status==="Reservation"){
                            return <RoomReservationList
                                Roomname = {card.Roomname}
                                Categolry = {card.Categolry}
                                Price = {card.Price}
                                Picture = {card.Picture}
                                ID ={card.ID}
                                Namepage = {this.props.namepage}
                                Details = {card.Details}
                            />
                        }
            })
        }
            </div>
        }
        if(this.props.namepage === undefined){
            View = <div>
            {
              this.props.roomList.map(card=>{
                    if(this.props.status==="Edit"){
                    return <EditRoom
                        Roomname = {card.Roomname}
                        Categolry = {card.Categolry}
                        Price = {card.Price}
                        Picture = {card.Picture}
                        ID ={card.ID}
                        Details = {card.Details}

                    />
                    }
                    if(this.props.status==="Delete"){
                        return <DeleteRoom
                            Roomname = {card.Roomname}
                            Categolry = {card.Categolry}
                            Price = {card.Price}
                            Picture = {card.Picture}
                            ID ={card.ID}
                            Details = {card.Details}

                        />
                        }
                        if(this.props.status==="View"){
                            return <RoomView
                                Roomname = {card.Roomname}
                                Categolry = {card.Categolry}
                                Price = {card.Price}
                                Picture = {card.Picture}
                                ID ={card.ID}
                                Namepage = {this.props.namepage}
                                Details = {card.Details}
                                Details = {card.Details}

                            />
                            }
                        if(this.props.status==="Reservation"){
                                return <RoomReservationList
                                    Roomname = {card.Roomname}
                                    Categolry = {card.Categolry}
                                    Price = {card.Price}
                                    Picture = {card.Picture}
                                    ID ={card.ID}
                                    Namepage = {this.props.namepage}
                                    Details = {card.Details}
                                />
                            }
                })
            }
                </div>
        }
        
        return(
        <div className="container " style={{paddingTop:"20px"}}>
            <div className="card shadow-lg">
                <div className="card-body">
                {View}

                </div>
             </div>
        </div>
        );
    }
}
export default rooms