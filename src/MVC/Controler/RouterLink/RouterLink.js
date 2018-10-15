import React,{Component} from 'react'
import { Route, Switch,NavLink } from 'react-router-dom'
import Register from '../../Component/Pages/RegisterView/Register'
import Viewprofiles from '../../Component/Pages/ViewProfiles/ViewProfiles'
import MemberList from '../../Component/Pages/MemberView/MemberView'
import AddRoom from '../../Component/Pages/AddRoomView/AddRoom';
import AddActivity from '../../Component/Pages/AddActivityView/AddActivity';
import AddEvent from '../../Component/Pages/AddEventView/AddEvent';
import EditActivity from '../../Component/Pages/EditReservationView/EditActivityListView'
import DeleteActivity from '../../Component/Pages/DeleteReservationView/DeleteActivityListView'
import EditEventListView from '../../Component/Pages/EditReservationView/EditEventListView'
import EditRoomListview from '../../Component/Pages/EditReservationView/EditRoomListview'
import DeleteEventListView from '../../Component/Pages/DeleteReservationView/DeleteEventListView'
import DeleteRoomListView from '../../Component/Pages/DeleteReservationView/DeleteRoomListView'
import EditRoomView from '../../Component/Pages/EditReservationView/EditView/EditRoomView'
import EditActivityView from '../../Component/Pages/EditReservationView/EditView/EditActivityView'
import EditEventView from '../../Component/Pages/EditReservationView/EditView/EditEventView'
import MemberActivityListView from '../../Component/Pages/MemberReservationView/ViewListActivityPage'
import MemberRoomListView from '../../Component/Pages/MemberReservationView/ViewListRoomPage'
import MemberEventListView from '../../Component/Pages/MemberReservationView/ViewListEventPage'
import RiverWing from '../../Component/Pages/MemberReservationView/Room/RiverWing'
import FamilyHouse  from '../../Component/Pages/MemberReservationView/Room/FamilyHouse'
import FamilyRoom from '../../Component/Pages/MemberReservationView/Room/FamilyRoom'
import GardenView from '../../Component/Pages/MemberReservationView/Room/GardenView'
import GardenWing from '../../Component/Pages/MemberReservationView/Room/GardenWing'
import MountainViewWing from '../../Component/Pages/MemberReservationView/Room/MountainViewWing'
import VillaWing from '../../Component/Pages/MemberReservationView/Room/VillaWing'
import ReservationView from '../../Component/Pages/ReservationView/ReservationView'
import ActivityReservationView from '../../Component/Pages/ReservationView/ActivityReservationView'
import EventReservationView from '../../Component/Pages/ReservationView/EventReservationView'
import Bill from '../../Component/Pages/ReservationView/Bill'
import Homepage from '../../Component/Pages/HomepagesView/Homepages'
import MemberTableReservationList from '../../Component/Pages/TableView/MemberTableView'
import RoomTableView from '../../Component/Pages/TableView/RoomTableView'
import ActivityTableView from '../../Component/Pages/TableView/ActivityTableView'
import EventTableView from '../../Component/Pages/TableView/EventTableView'
import Contact from '../../Component/Pages/ContactView/ContactView'
import ContactListView from '../../Component/Pages/ContactView/ContactListView'

class RouterLink extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" exact component={Homepage} />

                    <Route exact path="/Register" exact component={Register} />
                    <Route exact path="/Viewprofiles" exact component={Viewprofiles} />
                    <Route exact path="/SuperUserSetpermission" exact component={MemberList} />
                    
                    <Route exact path="/AddReservationRoom" exact component={AddRoom} />
                    <Route exact path="/SuperUserEditRoom" exact component={EditRoomListview} />
                    <Route exact path="/SuperUserCancelRoom" exact component={DeleteRoomListView} />

                    <Route exact path="/AddReservationActivity" exact component={AddActivity} />
                    <Route exact path="/SuperUserEditActivity" exact component={EditActivity} />
                    <Route exact path="/SuperUserCancelActivity" exact component={DeleteActivity} />

                    <Route exact path="/AddReservationEvent" exact component={AddEvent} />
                    <Route exact path="/SuperUserEditEvent" exact component={EditEventListView} />
                    <Route exact path="/SuperUserCancelEvent" exact component={DeleteEventListView} />

                    <Route exact path="/EditReservationRoom" exact component={EditRoomView} />
                    <Route exact path="/EditReservationActivity" exact component={EditActivityView} />
                    <Route exact path="/EditReservationEvent" exact component={EditEventView} />

                    <Route exact path="/Activities" exact component={MemberActivityListView} />
                    <Route exact path="/Event" exact component={MemberEventListView} />
                    <Route exact path="/Accomodation" exact component={MemberRoomListView} />


                    <Route exact path="/Riverwing" exact component={RiverWing} />
                    <Route exact path="/Villawing" exact component={VillaWing} />
                    <Route exact path="/Gardenwing" exact component={GardenWing} />
                    <Route exact path="/Mountainviewwing" exact component={MountainViewWing} />
                    <Route exact path="/Familyroom" exact component={FamilyRoom} />
                    <Route exact path="/Familyhouse" exact component={FamilyHouse} />
                    <Route exact path="/Gardenview" exact component={GardenView} />

                    <Route exact path="/ReservationRoom" exact component={ReservationView} />
                    <Route exact path="/ReservationActivity" exact component={ActivityReservationView} />
                    <Route exact path="/ReservationEvent" exact component={EventReservationView} />
                    <Route exact path="/ReservationList" exact component={MemberTableReservationList} />

                    <Route exact path="/ReservationRoomList" exact component={RoomTableView} />
                    <Route exact path="/ReservationActivityList" exact component={ActivityTableView} />
                    <Route exact path="/ReservationEventList" exact component={EventTableView} />

                    <Route exact path="/Bill" exact component={Bill} />
                    <Route exact path="/Contact" exact component={Contact} />
                    <Route exact path="/ContactList" exact component={ContactListView} />

                </Switch>
            </div>
        );
    }
}

export default RouterLink