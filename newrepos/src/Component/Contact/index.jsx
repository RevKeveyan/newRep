import React, { Component } from "react";
import './style.css'
import { Header } from "../Home/Home_Components/Header";
import { AboutCont } from "../Contact/Contact_Components/About_page"
import { Form } from "../Contact/Contact_Components/Form"
import { Map } from "../Contact/Contact_Components/Map"
export class Contact extends Component{
    render (){
        return <>
            <Header/>
            {/* <PageDescr/> */}
            <AboutCont/>
            <Form/>
            <Map/>
            </>
    }

}