import React, { Component } from "react";
import Pizza1 from "../../assets/images/1.jpg"
import Pizza2 from "../../assets/images/2.jpg"
import Pizza3 from "../../assets/images/3.jpg"
import Salad1 from "../../assets/images/4.jpg"
import Salad2 from "../../assets/images/5.jpg"
import Noodle1 from "../../assets/images/6.jpg"
import Noodle2 from "../../assets/images/7.jpg"
import "./style.css"

export class List extends Component{

    state = {
        name : "pizza",
        list : [
            {
                img : Pizza1,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "pizza"
            },
            {
                img : Pizza2,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "pizza"
            },
            {
                img : Pizza3,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "pizza"
            },
            {
                img : Salad1,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "salad"
            },
            {
                img : Salad2,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "salad"
            },
            {
                img : Noodle1,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "noodle"
            },
            {
                img : Noodle2,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "noodle"
            },
        ],

        buttons : ["pizza","salad","noodle"],

        list2 : []
    }
    componentDidMount(){
        this.setState({list2 : this.state.list.filter(x=>x.type === this.state.name)})
    }

    active = (e)=>{
        this.setState({name : e})
        this.setState({list2 : this.state.list.filter(x=>x.type === e)})
    }

    render(){


        return <div className="Main">
            {this.state.buttons.map((elem,index)=>{
                return <button onClick={()=>this.active(elem)} className={this.state.name === elem? "active" : null} key={index}>{elem}</button>
            })}
            <div className="lists">
            {this.state.list2.map((elem,index)=>{
                return <div key={index}>
                    <img src={elem.img} alt="nkar" />
                    <h2>{elem.title}</h2>
                    <p>{elem.description}</p>
                    <span>{elem.price}</span>
                </div>
            })}
            </div>
        </div>
    }
}