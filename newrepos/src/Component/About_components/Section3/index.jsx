import React, { Component } from "react";
import './style.css'
import Pep from '../../../assets/icons/pep.png'
import Cup from '../../../assets/icons/cup.png'
import Plant from '../../../assets/icons/plant.png'
import { ReadAbout } from "./Read";

export class Read extends Component {
    constructor(props){
        super(props);
      
    this.state = {
        read : [{
            icon : Pep,
            name : "Pepper",
            descr : 'Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.'
        },
        {
            icon : Plant,
            name : "Plant",
            descr : 'Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget'
        },
        {
            icon : Cup,
            name : "Cup",
            descr : 'Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.'
        },
    ]

        
    }
    }
    render (){
        return <div className="read">
            {this.state.read.map((elem, index) =>{
                return <ReadAbout
                    icon = {elem.icon}
                    name = {elem.name}
                    descr = {elem.descr}
                    index = {index}
                />
            })}

        </div>
    }
}