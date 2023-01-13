import React, { Component } from "react";
import { Header } from "./Home_Components/Header";
import { AboutPage } from "./Home_Components/About_page";
import { List } from "./Home_Components/Order_list";
import { SectionAbout } from "./Home_Components/section_about/inex.jsx";
import { Footer } from "./Home_Components/footer";

import "./style.css";

export class Home extends Component{


    render (){
        return <>
        <Header/>
        <AboutPage/>
        <List/>
        <SectionAbout/>
        <Footer/>
        </>
    }


}
