import React, { Component } from 'react';
import Pizza1 from "../../../../assets/images/1.jpg";
import Pizza2 from "../../../../assets/images/2.jpg";
import Pizza3 from "../../../../assets/images/3.jpg";
import Pizza4 from "../../../../assets/images/8.jpg";
import Pizza5 from "../../../../assets/images/9.jpg";
import Salad1 from "../../../../assets/images/4.jpg";
import Salad2 from "../../../../assets/images/5.jpg";
import Noodle1 from "../../../../assets/images/6.jpg";
import Noodle2 from "../../../../assets/images/7.jpg";
import "./style.css";

export class List extends Component{
    state = {
        buttons : ['Pizza','Salad', 'Noodle'],
        list : [
            {
                img : Pizza1,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Pizza"
            },
            {
                img : Pizza2,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Pizza"
            },
            {
                img : Pizza3,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Pizza"
            },
            {
                img : Pizza4,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Pizza"
            },
            {
                img : Pizza5,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Pizza"
            },
            {
                img : Salad1,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Salad"
            },
            {
                img : Salad2,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Salad"
            },
            {
                img : Salad2,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Salad"
            },
            {
                img : Salad1,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Salad"
            },
            {
                img : Noodle1,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Noodle"
            },
            {
                img : Noodle2,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Noodle"
            },
            {
                img : Noodle2,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Noodle"
            },
            {
                img : Noodle1,
                title : 'Fusce dictum finibus',
                description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price : '$45 / $55',
                type : "Noodle"
            },
        ],
        list2 : [],
        name : "Pizza",
    }
    componentDidMount(){
        this.setState({list2 : this.state.list.filter(x=>x.type === this.state.name)})
    }

    active = (e)=>{
        this.setState({name : e})
        this.setState({list2 : this.state.list.filter(x=>x.type === e)})
    }
    
    render(){

        return <>
            <div className="btns">
            {this.state.buttons.map((elem,index)=>{
                return <button onClick={()=>this.active(elem)} className={this.state.name === elem? "active" : null} key={index}>{elem}</button>
            })}
            </div>
            <div className="lists">
            {this.state.list2.map((elem,index)=>{
                return <div key={index}>
                    <img src={elem.img} alt="nkar" />
                    <h2 className='list_title'>{elem.title}</h2>
                    <p className='list_descr'>{elem.description}</p>
                    <span className='list_price'>{elem.price}</span>
                </div>
            })}
            </div>
        </>
    }
}