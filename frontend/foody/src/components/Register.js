import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Register extends Component {
    constructor() {
        super();
        this.state={
            username:'',
            password:'',
            mobileNumber:'',
            usernameError:'',
            passwordError:'',
            mobileNumberError:'',
            isProfile: false,

        }
        this.register = this.register.bind(this);
        this.handleChange = this.handleChange.bind(this);
      } 
      valid(){
        if(this.state.username.length<4 && this.state.password.length<6 && this.state.mobileNumber.length<10 && this.state.role.length<1)
        {
         this.setState({usernameError:"Invalid Username",
          passwordError: "Password length should be more than 6",
          mobileNumberError:"Mobile number should be 10 digits",
        
        })
      }
      else  if(this.state.username.length<4){
          this.setState({
          usernameError:"Invalid Username"})
          }
      else  if(this.state.password.length<6){
        this.setState({
        passwordError:"Password length should be more than 6"})
        }
      else  if(this.state.mobileNumber.length<9){
        this.setState({
        mobileNumberError:"Mobile number should be 10 digits"})
        }
      else{
        return true
      }

      
    }
    
    register(e){
      this.setState({usernameError:"",
      passwordError: "",
      mobileNumberError:"",
    })
    e.preventDefault();
      if(this.valid()){
        fetch("http://localhost:8682/subs", {
          "method": "POST",
          "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*"
            
          },
          "body": JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            mobileNumber: this.state.mobileNumber,
          })
        })
        .then(response => response.json())
        .then(response => {
         alert("your registration is successfully submitted")
        })
        .catch(err => {
          alert("your registration is not submitted")
        });
      }
    }
    
    handleChange(changeObject) {
        this.setState(changeObject)
      }
    
   render(){
        return (
          <div style={{ backgroundColor: "#D3D3D3" }}>
          <div className="container" style={{ marginTop: 0 }}>
            <center>
              <div className="card" style={{ width: 600 }}>
           
            <form>
                <h3  className="card-header info-color white-text text-center py-4"
                  style={{ backgroundColor: " black " }}>
                    <strong style={{ color: "white" }}>
                    {" "}
                    Register{" "}
                  </strong> </h3>

                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control mb-4" placeholder="Enter username" 
                    onChange={(e) => this.handleChange({ username: e.target.value })} />
                    <p style={{color:"red" }}>{this.state.usernameError}</p>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control mb-4" placeholder="Enter password"  
                    onChange={(e) => this.handleChange({ password: e.target.value })} />
                    <p style={{color:"red" }}>{this.state.passwordError}</p>
                </div>

                <div className="form-group">
                    <label>MobileNumber</label>
                    <input type="text" className="form-control mb-4" placeholder="Enter mobile number"  
                    onChange={(e) => this.handleChange({ mobileNumber: e.target.value })}/>
                    <p style={{color:"red" }}>{this.state.mobileNumberError}</p>
                </div>

                


                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={(e)=>this.register(e)} >Register</button>
              <p>Have an account?  <Link to="/login">Login Here</Link></p>
            </form>
            </div>
            </center>
            </div>
            </div>
        );
   }
  }