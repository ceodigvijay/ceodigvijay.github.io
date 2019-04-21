import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import { Route } from "react-router-dom";
export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
            </div>
        );
    }
}
