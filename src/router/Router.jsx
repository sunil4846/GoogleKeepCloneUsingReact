import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from '../pages/signin/signin';
import Signup from '../pages/signup/signup';
import Dashboard from '../pages/dashboard/Dashboard';


function Router() {
    return (
        <div>
            <BrowserRouter >
                <Switch>
                    <Route path="/SignIn" component={Signin} />
                    <Route exact path="/" component={Signup} />
                    <Route path="/Dashboard" component={Dashboard} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router