import React, { Component } from "react";
import Pizza1 from "../../assets/images/1.jpg";
import Pizza2 from "../../assets/images/2.jpg";
import Pizza3 from "../../assets/images/3.jpg";
import Pizza4 from "../../assets/images/8.jpg";
import Pizza5 from "../../assets/images/9.jpg";
import Salad1 from "../../assets/images/4.jpg";
import Salad2 from "../../assets/images/5.jpg";
import Noodle1 from "../../assets/images/6.jpg";
import Noodle2 from "../../assets/images/7.jpg";
import MainBg from "../../assets/img/mainbg.jpg";
import Logo from "../../assets/img/logo.png";
import Avo from "../../assets/images/avo.jpg";
import "./style.css";

export class List extends Component{

    state = {
        bgImg : MainBg,
        pages : ['Home','About', 'Contact'],

        logo : {
            logoImg : Logo,
            title : "Simple House",
            subtitle : "new restaurant template",
        },

        homePageDesc :{
            title : 'Welcome to Simple House',
            decr : "Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.",
        },
        name : "Pizza",
        list : [
            {
                img : Pizza1,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Pizza"
            },
            {
                img : Pizza2,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Pizza"
            },
            {
                img : Pizza3,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Pizza"
            },
            {
                img : Pizza4,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Pizza"
            },
            {
                img : Pizza5,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Pizza"
            },
            {
                img : Salad1,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Salad"
            },
            {
                img : Salad2,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Salad"
            },
            {
                img : Salad2,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Salad"
            },
            {
                img : Salad1,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Salad"
            },
            {
                img : Noodle1,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Noodle"
            },
            {
                img : Noodle2,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Noodle"
            },
            {
                img : Noodle2,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Noodle"
            },
            {
                img : Noodle1,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Noodle"
            },
        ],

        buttons : ["Pizza","Salad","Noodle"],

        list2 : [],

        about : {
            img : Avo,
            title : 'Maecenas nulla neque',
            descr : 'Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.',
        },
        rights : 'Copyright © 2045 Simple House | Design: TemplateMo',
    }
    componentDidMount(){
        this.setState({list2 : this.state.list.filter(x=>x.type === this.state.name)})
    }

    active = (e)=>{
        this.setState({name : e})
        this.setState({list2 : this.state.list.filter(x=>x.type === e)})
    }

    render(){


        return <div>
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
                    <li><a href={this.state.pages[0]}>{this.state.pages[0]}</a></li>
                    <li><a href={this.state.pages[1]}>{this.state.pages[1]}</a></li>
                    <li><a href={this.state.pages[2]}>{this.state.pages[2]}</a></li>
                </ul>
            </div>
            </div>

            <div className="homepage">
                <h1 className="homepage_title">{this.state.homePageDesc.title}</h1>
                <div className="homepage_descr">{this.state.homePageDesc.decr}</div>
            </div>

            <div className="Main">
            <div className="btns">
            {this.state.buttons.map((elem,index)=>{
                return <button onClick={()=>this.active(elem)} className={this.state.name === elem? "active" : null} key={index}>{elem}</button>
            })}
            </div>
            <div className="lists">
            {this.state.list2.map((elem,index)=>{
                return <div key={index}>
                    <img src={elem.img} alt="nkar" />
                    <h2>{elem.title}</h2>
                    <p>{elem.description}</p>
                    <span>{elem.price}</span>
                </div>
            })}
            </div>
        </div>
        <div className="about">
            <img src={this.state.about.img} alt="Avocado" />
            <div className="about_text">
                <div className="about_title">{this.state.about.title}</div>
                <div className="about_descr">{this.state.about.descr}</div>
                <button className="about_btn">Read More</button>
            </div>
        </div>
        <div className="rights">{this.state.rights}</div>
        </div>

        
    }
}