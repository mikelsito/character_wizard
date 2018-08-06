import React from "react";
import { Link, Route } from "react-router-dom";
import Background from "../TestContent/Background";
import Class from "../TestContent/Class";
import Race from "../TestContent/Race";

const TestRouter = props => (
    <div className="holder">
        <ul>
            <li className="list-item"><Link to="/class"><p>Class</p></Link></li>
            <li className="list-item"><Link to="/race"><p>Race</p></Link></li>
            <li className="list-item"><Link to="/background"><p>Background</p></Link></li>
        </ul>
        {/* Route info goes here */}
        <div className="route-info">
            <Route exact path="/class" component={Class}/>
            <Route exact path="/race" component={Race}/>
            <Route exact path="/background" component={Background}/>
        </div>
    </div>
)

export default TestRouter;