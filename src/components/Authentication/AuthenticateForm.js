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
      userValid: null,
      password: "Password",
      passwordValid: null,
      email: "Enter Email",
      emailValid: null
    }
  }

    

  
    

    render(){ 
      let toggle = this.state.visibility;
      const form = this.props.formType;
      let SignUpAdditive;
      let topInputMargin = 'fadeIn second';
      let formFooter;




      if ( form === "signUp")
      {
        SignUpAdditive = this.returnSignUp();
      }
      else
      {
        formFooter = this.returnFooter();
        topInputMargin +=  " topInput";
      }


      
      


    if ( this.props.logVisible )
    {
      toggle = "visible slideUp";
    }







      return(
        <div id="formContent" className = {toggle} >
            {SignUpAdditive}
            <input onChange = {(event) => this.updateForm(event, "user")}  type="email" id="email" className={topInputMargin}name="login" placeholder= {this.state.user}/>
            <input onChange = {(event) => this.updateForm(event, "password")} type="text" id="password" className="fadeIn third" name="login" placeholder={this.state.password}/>
            <input onClick = {this.authenticate} type="submit" className="fadeIn fourth" value = "Enter" />
            <button onClick = {this.findTst} >Test</button>
            {formFooter}
      </div>
      );
  }






findTst = () =>{


  
  const data = {
    method: "post",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      test: "tst"
    })
  }


  
  





  fetch('http://localhost:5000', data).then(
    (response) =>{
      const tmp = response.text();
      return tmp;
    }).then( response => console.log(response));
    }













  updateForm = (event, props) =>{

    switch (props) {
      case ("user"):
        this.setState({
          user: event.target.value,
          userValid: true
        });
        break;
      case ("password"):
        this.setState({
          password: event.target.value,
          passwordValid: true
        });
        break;
      case ("email"):
        this.setState({
          email: event.target.value,
          emailValid: true
        });
        break;
      default:
        break;
    }

    


    
  }

  



  returnSignUp = () =>{
    return   <input onChange = {(event) => this.updateForm(event, "email")}  type="text" id="emailVer" className="fadeIn second topInput" name="login" placeholder= {this.state.email}/>      
  }
  returnFooter = () =>{
    return <div id="formFooter">
              <a className="underlineHover" href="#">Forgot Password?</a>
            </div>
  }




  authenticate = () =>{
    const validate = [ this.state.passwordValid, this.state.userValid, this.state.emailValid];
    let sendToServer = false;

    validate.forEach(element => {
      if (element)
      {
        sendToServer = true;
      }
      else
      {
        sendToServer = false;
      }
    });

    console.log(sendToServer);
    

    if ( sendToServer )
    {
      const data = {
        method: "post",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
          user: this.state.user,
          pass: this.state.password,
          email: this.state.email
        })
      }
    
      
      
  
  
  
  
  
      fetch('http://localhost:5000', data).then(
        (response) =>{
          const tmp = response.text();
          return tmp;
        }).then( response => console.log(response));
    }
    else
    {
      alert("Invalid Entry");
    }
        
        
    
    
    }
    }
    








    
  

  





export default AuthenticateForm;