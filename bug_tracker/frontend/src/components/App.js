import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from './HomePage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import LogBug from './LogBug';
import MyProjects from './MyProjects';
import AllBugs from './AllBugs';


export default class App extends Component { //this component is placed inside the <div
    constructor(props) {//props are arguments that you give to the compenents that are used to modify
        super(props);
        //this.state ={ } rerenders that componenet
    }

    render() {//returns the html that should be rendered on the page
        //return <h1>Testing React Code</h1>//return <h1>{this.props.name}</h1>
        return (//needs exterior wrapper whenever you return something to html
          <div>
                <HomePage /> 
                
         </div>
        );
    }

}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
//render(<App name="rich"/>, appDiv);
//access app container
//react works like: components can render other components
//{} allows us to embbed js code in html