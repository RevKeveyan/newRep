
import React, { Component } from "react";
import Logo from "../../../assets/img/logo.png";
import MainBg from "../../../assets/img/mainbg.jpg";
import {NavLink} from "react-router-dom";

import './style.css';



export class Header extends Component {
    constructor(props){
        super(props);
      
    this.state = {
        bgImg : MainBg,
        pages : ['Home','About', 'Contact'],
        path : ['home', 'about', 'contact'],
        logo : {
            logoImg : Logo,
            title : "Simple House",
            subtitle : "new restaurant template",
        },
    }
    }

    render (){
        return <>
             <div className="header">
                <div className="menu">
                    <div className="logo"> 
                        <img src={this.state.logo.logoImg} alt="Logo" />
                        <div className="logo_descr">
                            <div className="title">{this.state.logo.title}</div>
                            <div className="subtitle">{this.state.logo.subtitle}</div>
                        </div>
                    </div>
                <ul className="menu_links">
                    {this.state.pages.map((elem, index)=>{
                        return <li key={index}>
                        <NavLink to={'/'+this.state.path[index]}>
                            {elem}
                        </NavLink>
                        </li>
                    })}
                </ul>
            </div>
            </div>
        </>
    }
}