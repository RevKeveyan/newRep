import React, {Component} from "react";
import './style.css'
import Rest from '../../../../assets/img/7.jpg'

export class AboutRest extends Component{
    constructor(props){
        super(props);
      
    this.state = {
        about : {
            img : Rest,
            title : 'History of our restaurant',
            descr1 : `Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.`,
            descr2 : ' Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.'
        }
    }
}

    render () {
        return <>
            <div className="rest">
                <div className="rest_img">
                    <img src={this.state.about.img} alt="Restaurant" />
                </div>
                <div className="rest_text">
                        <div className="rest_title">{this.state.about.title}</div>
                        <div className="rest_descr">
                        <p>{this.state.about.descr1}</p><br></br>
                        <p>{this.state.about.descr2}</p>
                        </div>
                </div>
            </div>
        </>
    }
}