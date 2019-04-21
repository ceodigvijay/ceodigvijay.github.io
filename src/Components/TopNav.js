import React from "react";
import "./style.css";
import logo from "../images/logo.png";
import {NavLink} from 'react-router-dom'

export default function TopNav(props) {
    return (
        <div id="topbar" style={props.toApply}>
            <ul>
                <div id="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="#" exact>Result</NavLink></li>
                <li><NavLink to="/about" exact>About</NavLink></li>
                <li><NavLink to="#" exact>Contact</NavLink></li>
            </ul>
        </div>
    );
}
