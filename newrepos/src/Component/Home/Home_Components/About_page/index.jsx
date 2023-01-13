import React, { Component } from 'react';
import "./style.css";
export class AboutPage extends Component{

    
    state ={
        homePageDesc :{
            title : 'Welcome to Simple House',
            decr : "Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.",
        },
    }

  render(){
    
    return <>
    <div className="homepage">
        <h1 className="homepage_title">{this.state.homePageDesc.title}</h1>
        <div className="homepage_descr">{this.state.homePageDesc.decr}</div>
    </div>
    </>
  }
}