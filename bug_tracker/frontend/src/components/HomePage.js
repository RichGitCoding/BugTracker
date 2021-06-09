import React, { Component } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import LogBug from './LogBug';
import MyProjects from './MyProjects';
import MyBugs from './MyBugs'

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        //return <p>This is the home Page</p>;
        return(
            <Router>
                <Switch>
                    <Route exact path ="/">
                        <p>This is the home page</p>
                    </Route>
                    <Route path='/SignIn' component={SignIn}></Route> 
                    <Route path='/SignUp' component={SignUp}></Route>
                    <Route path='/LogBug' component={LogBug}></Route>
                    <Route path='/MyBugs' component={MyBugs}></Route>
                    <Route path='/MyProjects' component={MyProjects}></Route>
                </Switch>
            </Router>


        );
    }
}