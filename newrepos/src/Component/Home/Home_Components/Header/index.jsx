
import React, { Component } from "react";
import Logo from "../../../../assets/img/logo.png";
import MainBg from "../../../../assets/img/mainbg.jpg";
import './style.css';



export class Header extends Component {
    state = {
        bgImg : MainBg,
        pages : ['Home','About', 'Contact'],
        logo : {
            logoImg : Logo,
            title : "Simple House",
            subtitle : "new restaurant template",
        },
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
                    <li>{this.state.pages[0]}</li>
                    <li>{this.state.pages[0]}</li>
                    <li>{this.state.pages[0]}</li>
                </ul>
            </div>
            </div>
        </>
    }
}