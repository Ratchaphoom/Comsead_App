import React,{Component} from 'react'
import { Route, Switch,NavLink } from 'react-router-dom'
import Register from '../../Component/Pages/Register/Register'
import Viewprofiles from '../../Component/Pages/ViewProfiles/ViewProfiles'
import MemberList from '../../Component/Pages/MemberView/MemberView'
class RouterLink extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/Register" exact component={Register} />
                    <Route path="/Viewprofiles" exact component={Viewprofiles} />
                    <Route path="/SuperUserSetpermission" exact component={MemberList} />
                </Switch>
            </div>
        );
    }
}

export default RouterLink