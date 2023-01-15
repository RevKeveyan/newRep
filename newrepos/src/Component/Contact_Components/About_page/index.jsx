import React, { Component } from "react";

export class AboutCont extends Component{
    constructor(props){
        super(props);
      
    this.state = {
        title : "Contact Page",
        text : 'You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template.'
    }
    }
    render(){
    
        return <>
        <div className="homepage">
            <h1 className="homepage_title">{this.state.title}</h1>
            <div className="homepage_descr">{this.state.text}</div>
        </div>
        </>
      }
}