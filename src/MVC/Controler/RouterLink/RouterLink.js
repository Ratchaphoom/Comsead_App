import React,{Component} from 'react'
import { Route, Switch,NavLink } from 'react-router-dom'
import Register from '../Pages/Register/Register'
class RouterLink extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/Register" exact component={Register} />
                </Switch>
            </div>
        );
    }
}

export default RouterLink