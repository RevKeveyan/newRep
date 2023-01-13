import React, { Component } from "react";
import { Header } from "../Home/Home_Components/Header";
import { PageDescr } from "../About/About_components/About_page";
import { Users } from "../About/About_components/List";
import { SectionBg } from '../About/About_components/Sectionbg'
import { Read } from "../About/About_components/Section3"
import { AboutRest } from "../About/About_components/more"
import { Footer } from "../Home/Home_Components/footer"

export class About extends Component{

    render (){
        return <>
            <Header/>
            <PageDescr/>
            <Users/>
            <SectionBg/>
            <Read/>
            <AboutRest/>
            <Footer/>
            </>
    }
}