import React, { Component } from 'react';
import '../../homeWork/style.css';  

class Header1 extends Component{
    constructor(props){
        super(props);

        this.state = {
            flag: 0,
            input : 0,
            nameValid: '',
            surnameValid: '',
            emailValid: '',
            loginValid: '',
            passwordValid: '',
            regbtn: false,
        };

    }
    name = (e) => {
        this.setState({nameValid: e.target.value});
    }
    surName = (e) => {
        this.setState({surnameValid: e.target.value});
    }
    email = (e) => {
        this.setState({emailValid: e.target.value});
    }
    login = (e) => {
        this.setState({loginValid: e.target.value});
    }
    pass = (e) => {
        this.setState({passwordValid: e.target.value});
    }
//--------------------
    log = () =>{
        console.log(this.state);
    }
    btn = () =>{
        this.setState({regbtn: true});
    }
    render (){  

        return <div>
            <input type="text" onChange={this.name} placeholder='name' className={(this.state.nameValid && this.state.regbtn) ? "green" : ((this.state.regbtn == false))? "grey" : "red"} /><br /><br />
            <input type="text" onChange={this.surName} placeholder='surname' className={(this.state.surnameValid && this.state.regbtn) ? "green" : ((this.state.regbtn == false))? "grey" : "red"}/><br /><br />
            <input type="text" onChange={this.email} placeholder='email' className={(this.state.emailValid && this.state.regbtn) ? "green" : ((this.state.regbtn == false))? "grey" : "red"} /><br /><br />
            <input type="text" onChange={this.login} placeholder='login' className={(this.state.loginValid && this.state.regbtn) ? "green" : ((this.state.regbtn == false))? "grey" : "red"} /><br /><br />
            <input type="text" onChange={this.pass} placeholder='password' className={(this.state.passwordValid && this.state.regbtn) ? "green" : ((this.state.regbtn == false))? "grey" : "red"} /><br /><br />
            <button class="btn" onClick={this.btn}>Register</button>
        </div>
    }
}
export default Header1;