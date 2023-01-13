import React, {Component} from "react";
import Nkar from "../../assets/images/1.jpg"
export class About extends Component{


    render() {
        return <div>
            <h2>ABout</h2>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis deserunt ex id incidunt ipsum iusto, odio placeat saepe vero.</p>
                <img src={Nkar} alt=""/>
            </div>
        </div>
    }
}