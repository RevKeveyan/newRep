import React, { Component } from 'react';
import '../../homeWork/style.css';  

class Header1 extends Component{
    constructor(props){
        super(props);

        this.state = {
            nameValid: '',
            surnameValid: '',
            emailValid: '',
            loginValid: '',
            passwordValid: '',
            regbtn: false,

            error : {
                nameError : "",
                surNameError : "",
                emailError : "",
                loginError : "",
                passwordError : "",
            }
        };

    }
    name = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    validation = ()=>{
        let valid = true
        const errors = {
            nameError : "",
            surNameError : "",
            emailError : "",
            loginError : "",
            passwordError : "",
        }

        if(!this.state.nameValid){
            errors.nameError = "Required Name"
            valid = false
        }
        if(!this.state.surnameValid){
            errors.surNameError = "Required SurName"
            valid = false
        }
        if(!this.state.emailValid){
            errors.emailError = "Required email"
            valid = false
        }
        if(!this.state.loginValid){
            errors.loginError = "Required login"
            valid = false
        }
        if(!this.state.passwordValid){
            errors.passwordError = "Required pssword"
            valid = false
        }else if(this.state.passwordValid === this.state.confrimPasswordValid){
            errors.passwordError = "Required confrim password"
            valid = false
        }

        this.setState({error : errors})
        return valid
    }
    // surName = (e) => {
    //     this.setState({surnameValid: e.target.value});
    // }
    // email = (e) => {
    //     this.setState({emailValid: e.target.value});
    // }
    // login = (e) => {
    //     this.setState({loginValid: e.target.value});
    // }
    // pass = (e) => {
    //     this.setState({passwordValid: e.target.value});
    // }
//--------------------
    log = () =>{
        console.log(this.state);
    }
    btn = () =>{
        this.setState({regbtn: true});
    }
    render (){  
        console.log(this.state)

        return <div>
            <input type="text" name='nameValid' onChange={this.name} placeholder='name' className={this.state.error.nameError? "red" : null}/><br /><br />
            {this.state.error.nameError? <p>{this.state.error.nameError}</p> : null}
            <input type="text" name='surnameValid' onChange={this.name} placeholder='surname' className={(this.state.surnameValid && this.state.regbtn) ? "green" : ((this.state.regbtn == false))? "grey" : "red"}/><br /><br />
            <input type="text" name='emailValid' onChange={this.name} placeholder='email' className={(this.state.emailValid && this.state.regbtn) ? "green" : ((this.state.regbtn == false))? "grey" : "red"} /><br /><br />
            <input type="text" name='loginValid' onChange={this.name} placeholder='login' className={(this.state.loginValid && this.state.regbtn) ? "green" : ((this.state.regbtn == false))? "grey" : "red"} /><br /><br />
            <input type="text" name='passwordValid' onChange={this.name} placeholder='password' className={(this.state.passwordValid && this.state.regbtn) ? "green" : ((this.state.regbtn == false))? "grey" : "red"} /><br /><br />
            <button className="btn" onClick={this.validation}>Register</button>
        </div>
    }
}
export default Header1;