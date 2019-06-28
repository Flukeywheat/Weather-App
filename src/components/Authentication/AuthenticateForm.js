import React, {Component} from "react";
import axios from "axios";
 
import "./LoginForm.css";
import "../FrontPageHeader/frontPageIntroComps/FrontForm/FrontForm.css";
import { create } from "istanbul-reports";




class  AuthenticateForm extends Component {


  constructor(props) {
    super(props);
    

    this.state = {
      user: null,
      userValid: null,
      userTaken: null,
      password: null,
      passwordValid: null,
      email: null,
      emailValid: null,
      emailTaken: null
    }
  }

    

  
    

    render(){ 
      let toggle = "slideUp";
      const form = this.props.formType;
      let SignUpAdditive;
      let userNameInputStyling = 'whiteBox fadeIn second';
      let formFooter;
      let userTaken;
      let emailTaken;
      let submitFunc = this.checkUser; //Login Form Submit




      if ( form === "signUp")
      {
        let redBox;
        if ( this.state.emailTaken )
        {
          redBox = true;
        }
        SignUpAdditive = this.returnSignUp(redBox);
        submitFunc = this.CreatUser; // Sign Up Form Commit
      }
      else
      {
        formFooter = this.returnFooter();
        userNameInputStyling +=  " topInput";
      }


      
      






    if ( this.state.emailTaken)
    {
      emailTaken = this.returnEmail_UserTakenP("Email Address");
    }
    if ( this.state.userTaken)
    {
      userTaken = this.returnEmail_UserTakenP("Username");
      userNameInputStyling += " redBox";
    }





      return(
        <div id="formContent" className = {toggle} >
            {SignUpAdditive}
            {emailTaken}
            <div  className = "inputStyle">
              <label className = "inputLbl fadeIn second" htmlFor="userName"> Username</label>
              <input onChange = {(event) => this.updateForm(event, "user")}  type="text" id="userName" className={userNameInputStyling}name="login" placeholder= {this.state.user}/>
            </div>
           {userTaken}
           <div className = "inputStyle">
            <label className = "inputLbl fadeIn second" htmlFor="userName"> Password</label>
            <input onChange = {(event) => this.updateForm(event, "password")} type="text" id="password" className="whiteBox fadeIn third" name="login" placeholder={this.state.password}/>
           </div>
            <input onClick = {submitFunc} type="submit" className="fadeIn fourth" value = "Enter" />
            {formFooter}
      </div>
      );
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

  



  returnSignUp = (Border) =>{
    let styling ="whiteBox fadeIn second topInput";
    if ( Border )
    {
      styling += " redBox"
    }

    return  (
      <div  className = "inputStyle">
        <label className = "inputLbl fadeIn second" htmlFor="emailVer">Email</label>
       <input onChange = {(event) => this.updateForm(event, "email")}  type="text" id="emailVer" className={styling} name="login" placeholder= {this.state.email}/>      
      </div>
    )
  }


  returnFooter = () =>{
    return <div id="formFooter">
              <a className="underlineHover" href="#">Forgot Password?</a>
            </div>
  }
  returnEmail_UserTakenP = (email_user) =>{
    return <p className = "takenLbl"> {email_user} Already Taken</p>
  }




  validateCurrentInputs = (signUp) =>{
    const validate = [ this.state.passwordValid, this.state.userValid];

    if (signUp)//check if Sign up Form 
    {
      validate.push(this.state.emailValid)
    }

    let sendToServer = false;
    this.setState({
      emailTaken : false,
      userTaken: false
    })
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
    return sendToServer
  }


  formatStateForServer = () =>{
    //Create object from current State
    let stateProps = {
      user: this.state.user,
      pass: this.state.password
    };
    if ( this.state.email !== null)
    {
      stateProps.email = this.state.email;
    }
    stateProps = JSON.stringify(stateProps);
    



    const data = {
      method: "post",
      headers: {"Content-Type":"application/json"},
      body: stateProps
    };
      
    // Format for Server
    

  return data;
}






  checkUser = () =>{
    if ( this.validateCurrentInputs(false) )
    {
      const data = this.formatStateForServer();
      fetch('http://localhost:5000', data)
    }
  }


  CreatUser = () =>{
    
    if ( this.validateCurrentInputs(true) )
    {
      const data = this.formatStateForServer(); 
      fetch('http://localhost:5000', data).then( (response) => {
          if ( response )
          {
            return response.json();
          }
        }).then( (val)  =>{
          
            if ( val.userFound === true && val.emailFound === true)
            {
              console.log("1");
              
              this.setState({
                userTaken : true,
                emailTaken : true 
              });
            }
            else if ( val.emailFound )
            {
              console.log("2");

              this.setState({
                emailTaken: true
              })
            }
            else
            {
              console.log("3");

              this.setState({
                userTaken: true
              })
            }
            
          
          console.log(this.state);
          
        });
    }
    else
    {
      alert("Invalid Entry");
    }
    
    }
    }
    








    
  

  





export default AuthenticateForm;