import React, {Component} from "react";
import "./style.css"

export class  MainText extends Component{


    render() {
        const {title,description} = this.props

        return <div className="title2">
            {title? <h2>{title}</h2> : null}
            <p>{description}</p>
        </div>
    }
}