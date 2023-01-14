import React, { Component } from "react";
import './style.css'
import Arrow from "../../../../assets/icons/arrow.png"


export class FAQ extends Component{
    constructor(props){
        super(props)

        this.state = {
            title: 'FAQs',
            text: 'This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you. #777',

            questions:[{
                question : '1. Fusce eu lorem et dui #09C maximus varius?',
                text : '#777 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.',
                show: false,
                btnClick : false,
            },
            {
                question : '2. Vestibulum #999 ante ipsum primis in faucibus orci?',
                text : 'Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta.',
                show: false,
                btnClick : false,
            },
            {
                question : '3. Um erat. Lorem ipsum dolor sit amet consectetur?',
                text : 'Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.',
                show: false,
                btnClick : false,
            },
            {
                question : '4. Ut ac erat sit amet neque efficitur faucibus et in lectus?',
                text : 'Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim.',
                show: false,
                btnClick : false,
            },
            ],
            show : false,
            
        }


    }
    btn = (index) =>{
        if(!this.state.questions[index].show){
            this.state.questions[index].show = true;
            this.state.questions[index].btnClick = true;
        }else{
            this.state.questions[index].show = false;
            this.state.questions[index].btnClick = false;
        }
    }

    render (){

        return <>
                <div className="faq">
                    <h2 className="faq_title">{this.state.title}</h2>
                    <p className="faq_text">{this.state.text}</p>

                    <div className="faq_questions">
                            {this.state.questions.map((elem,index)=>{
                                return <div className="faq_help"> 
                                <button onClick={this.btn(0)} className="faq_question" key={index}> {elem.question} <img className={this.state.questions[index].btnClick? null : "rotate"} src={Arrow} alt="Arrow" /></button>
                                <div className={this.state.questions[index].show? "show faq_qustions_text":"hide faq_qustions_text"}>{elem.text}</div>
                                </div>
                            })}
                    </div>
                </div>
        </>
    }
}