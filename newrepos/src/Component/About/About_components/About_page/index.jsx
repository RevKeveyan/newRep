import React, { Component } from 'react';
import "./style.css";
export class PageDescr extends Component{

  constructor(props){
    super(props);
  
    this.state = {
        homePageDesc :{
            title : 'About Simple House',
            decr : "This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.",
        },
    }
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