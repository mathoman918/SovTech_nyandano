import React, {component} from "react";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Intro from "./Intro";
import Contact from "./Contact";

class Main extends Component {
    render(){
        return(
            <HashRouter>
            <div>
                <h1>NYANDANO MATHOMA</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/intro">intro</NavLink></li>
                    <li><NavLink to="/contact">contact</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/intro" component={Intro}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </div>
            </HashRouter>
        );
    }
}
export default Main;