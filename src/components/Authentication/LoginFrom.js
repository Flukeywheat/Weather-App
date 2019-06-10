import React, {Component} from "react";
import axios from "axios";
 
import "./LoginForm.css";
import "../FrontPageHeader/frontPageIntroComps/FrontForm/FrontForm.css";




class  LoginForm extends Component {


  constructor(props) {
    super(props);

    this.state = {
      visibility: "hidden",
      user: "Username",
      password: "password"
    }
  }

    

  
    

    render(){ 
      let toggle = this.state.visibility;
      if ( this.props.logVisible )
    {
      toggle = "visible slideUp";
    }

      return(
        <div id="formContent" className = {toggle} >
          
          <input onChange = {this.updateUser} id = "login" type="email" id="login" className="fadeIn second" name="login" placeholder= {this.state.user}/>
          <input onChange = {this.updatePass} type="text" id="password" className="fadeIn third" name="login" placeholder={this.state.password}/>
          <input onClick = {this.authenticate} type="submit" className="fadeIn fourth"/>
   
    
        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div>
    
      </div>
      );
  }

  updateUser = (event) =>{
    this.setState({
      user: event.target.value
    })
  }

  updatePass = (event) =>{
    this.setState({
      password: event.target.value
    })
  }

  authenticate = () =>{
  


    
    const data = {
      method: "post",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        user: this.state.user,
        pass: this.state.password
      })
    }
  
    
  
    fetch('http://localhost:5000', data).then(
      (response) =>{
        const tmp = response.text();
        return tmp;
      }).then( response => this.setState({user: response}))
      }
      
      
  
  
  }








    
  

  





export default LoginForm;