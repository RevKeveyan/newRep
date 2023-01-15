import React, {Component} from "react";
import './style.css'
export class Products extends Component{

    render() {
        const {img,title,description,price,key} = this.props

        return <div key={key}>
            <img src={img} alt="nkar"/>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{price}</span>
        </div>
    }
}