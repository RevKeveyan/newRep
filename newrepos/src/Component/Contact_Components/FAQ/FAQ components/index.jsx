import React, {Component} from "react";

export class Show extends Component{
    state = {
        flag : false,
    }

    Close = ()=>{
        this.setState({flag: !this.state.flag})
    }

    render() {


        const {img,text,question} = this.props

        return <div className="faq_help"> 
        <button onClick={this.Close} className="faq_question"> {question} <img className={!this.state.flag? "rotate":null} src={img} alt="Arrow" /></button>
        {this.state.flag ? <p>{text}</p> : null}
        </div>
    }
}