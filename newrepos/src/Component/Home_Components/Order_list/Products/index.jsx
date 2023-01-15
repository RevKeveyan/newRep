import React, {Component} from "react";
import './style.css'
export class Products extends Component{

    render() {
        const {img,title,description,price} = this.props

        return <div>
            <img src={img} alt="nkar"/>
            <h2 className="list_title">{title}</h2>
            <p className="list_descr">{description}</p>
            <span className="list_price">{price}</span>
        </div>
    }
}