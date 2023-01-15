import React, { Component } from "react";
import Avo from "../../../assets/images/avo.jpg";

import "./style.css";


export class SectionAbout extends Component{

    state = {
        about : {
            img : Avo,
            title : 'Maecenas nulla neque',
            descr : 'Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.',
        }
    }

    render (){

        const {img, title, descr} = this.props

        return <>
        
        <div className="about">
            <img src={img} alt="Avocado" />
            <div className="about_text">
                <div className="about_title">{title}</div>
                <div className="about_descr">{descr}</div>
                <button className="about_btn">Read More</button>
            </div>
        </div>      
        </>
    }
}