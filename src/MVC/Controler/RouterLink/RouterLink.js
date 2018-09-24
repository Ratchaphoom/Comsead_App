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

class RouterLink extends Component{
    render(){
        return(
            <div>
                <Switch>
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
                </Switch>
            </div>
        );
    }
}

export default RouterLink