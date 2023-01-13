import React, { Component } from "react";
import "./style.css"
import {Link,NavLink} from "react-router-dom";

export class Routing extends Component{


    render(){
        console.log(45)

        return <div className="menu">
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    }
}