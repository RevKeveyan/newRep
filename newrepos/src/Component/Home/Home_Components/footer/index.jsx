import React, { Component } from "react";
import "./style.css"


export class Footer extends Component {
    state = {
        rights : 'Copyright © 2045 Simple House | Design: TemplateMo',
    }

    render (){
        return <>
             <div className="rights">{this.state.rights}</div>
        </>
    }
}