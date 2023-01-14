import React, { Component } from "react";
import './style.css'
import Facebook from "../../../../assets/icons/facabook.png"
import YouTube from "../../../../assets/icons/youtube.png"
import Insta from "../../../../assets/icons/insta.png"
import Twitter from "../../../../assets/icons/twit.png"
import Phone from "../../../../assets/icons/phone.png"
import Email from "../../../../assets/icons/email.png"

export class Form extends Component {
    constructor(props){
        super(props);

    this.state = {
        title : 'Our Address',
        text : '180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550',
        phone : '080-090-0110',
        phoneIcon : Phone,
        email : 'info@company.co',
        emailicon : Email,
        social : [
            {
                name : "Facebook",
                link : "facebook.com",
                icon : Facebook,
            },
            {
                name : "Insta",
                link : "insta.com",
                icon : Insta,
            },
            {
                name : "Twitter",
                link : "twitter.com",
                icon : Twitter,
            },
        ],

        
            Name : "",
            Email : "",
            Message : "",
            btn : false,
       
            error : {
                nameError : "",
                EmailErr : "",
                MessageErr : "",
            }
    }
}
    validation = ()=>{
        let valid = true
        const errors = {
            nameError : "",
            EmailErr : "",
            MessageErr : "",
           
        }

        if(!this.state.Name){
            errors.nameError = "Required Name"
            valid = false
        }
        if(!this.state.Email){
            errors.EmailErr = "Required Email"
            valid = false
        }

        this.setState({error : errors})
        return valid
    }

    name1 = (e) =>{
        this.setState({[e.target.name]: e.target.value});
        
    }


    render (){
        
        return <>
            <div className="form">
                <div className="form_inputs">
                        {this.state.error.nameError? <p className="errtext">{this.state.error.nameError}</p> : null}
                        <input className={this.state.error.nameError? "red":null} onChange={this.name1}  type="text" name ="Name" placeholder="Name"/>
                        {this.state.error.nameError? <p className="errtext">{this.state.error.EmailErr}</p> : null}
                        <input className={this.state.error.nameError? "red":null} onChange={this.name1} type="text" name ="Email"  placeholder="Email"/>
                        <textarea  onChange={this.name1} name="Message" id="" cols="30" rows="10"  placeholder="Message"></textarea>
                        <button onClick={this.validation} className="form_btn">Send</button>
                </div>
                <div>
                    <h2 className="form_title">{this.state.title}</h2>
                    <p className="form_text">{this.state.text}</p>
                    <ul className="form_cont">
                        <li><img src={this.state.phoneIcon} alt="" />{this.state.phone}</li>
                        <li><img src={this.state.emailicon} alt="" />{this.state.email}</li>
                    </ul>
                    <ul className="form_social">
                    {this.state.social.map((elem,index)=>{
                        return<li key={index}><img src={elem.icon} alt={elem.name} /></li>
                    })}
                    </ul>
                </div>
            </div>
        </>
    }
}