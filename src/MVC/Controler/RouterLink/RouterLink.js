import React,{Component} from 'react'
import { Route, Switch,NavLink } from 'react-router-dom'
import Register from '../../Component/Pages/Register/Register'
import Viewprofiles from '../../Component/Pages/ViewProfiles/ViewProfiles'
class RouterLink extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/Register" exact component={Register} />
                    <Route path="/Viewprofiles" exact component={Viewprofiles} />
                </Switch>
            </div>
        );
    }
}

export default RouterLink