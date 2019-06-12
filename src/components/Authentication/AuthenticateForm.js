import React, {Component} from "react";
import axios from "axios";
 
import "./LoginForm.css";
import "../FrontPageHeader/frontPageIntroComps/FrontForm/FrontForm.css";




class  AuthenticateForm extends Component {


  constructor(props) {
    super(props);
    

    this.state = {
      visibility: "hidden",
      user: "Username",
      password: "Password",
      email: "Enter Email"
    }
  }

    

  
    

    render(){ 
      let toggle = this.state.visibility;
      const form = this.props.formType;
      let SignUpAdditive;
      let formFooter;




      if ( form === "signUp")
      {
        SignUpAdditive = this.returnSignUp();
      }
      else
      {
        formFooter = this.returnFooter();
      }


      
      


    if ( this.props.logVisible )
    {
      toggle = "visible slideUp";
    }







      return(
        <div id="formContent" className = {toggle} >
          {SignUpAdditive}
          <input onChange = {(event) => this.updateForm(event, "user")}  type="email" id="Login" className="fadeIn second" name="login" placeholder= {this.state.user}/>
          <input onChange = {(event) => this.updateForm(event, "password")} type="text" id="password" className="fadeIn third" name="login" placeholder={this.state.password}/>
          <input onClick = {this.authenticate} type="submit" className="fadeIn fourth"/>
          {formFooter}
    
      </div>
      );
  }



















  updateForm = (event, props) =>{

    console.log(props);
    console.log(event);
    

    switch (props) {
      case ("user"):
        this.setState({
          user: event.target.value
        })
        break;
      case ("password"):
        this.setState({
          password: event.target.value
        })
        break;
      case ("email"):
        this.setState({
          email: event.target.value
        })
        break;
      default:
        break;
    }

    console.log(this.state);
    


    
  }

  



  returnSignUp = () =>{
    return   <input onChange = {this.updateForm("email")}  type="text" id="emailVer" className="fadeIn second" name="login" placeholder= {this.state.email}/>      
  }
  returnFooter = () =>{
    return <div id="formFooter">
              <a className="underlineHover" href="#">Forgot Password?</a>
            </div>
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
  
    const newEmail = this.state.email;

    if ( newEmail !== "Enter Email")
    {
      data.body.email = newEmail;
    }
  






    fetch('http://localhost:5000', data).then(
      (response) =>{
        const tmp = response.text();
        return tmp;
      }).then( response => this.setState({user: response}))
      }
      
      
  
  
  }








    
  

  





export default AuthenticateForm;