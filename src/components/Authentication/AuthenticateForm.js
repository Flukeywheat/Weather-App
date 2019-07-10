import React, {Component} from "react";
import { Redirect } from "react-router-dom";
 
import "./LoginForm.css";
import "../FrontPageHeader/frontPageIntroComps/FrontForm/FrontForm.css";




class  AuthenticateForm extends Component {
  _isMounted = false

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
      emailTaken: null,
      redirect: false,
      invalidUserPassword: false
    }
  }

  componentDidMount(){
    this._isMounted = true;
  }
  componentWillUnmount(){
    this._isMounted = false;
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
    if ( this.state.invalidUserPassword)
    {
      userTaken = this.returninvalidUser_PasswordLbl();
    }


    




















    let SignIn = null


    if ( this.state.redirect)
      {
        SignIn = <Redirect to = {{ pathname: "/SignedIn" , state: { fromsignedIn: true } }} />   
      }


      return(
        <div id="formContent" className = {toggle} >
            {SignIn}
            {SignUpAdditive}
            {emailTaken}
            <div  className = "inputStyle">
              <label className = "inputLbl fadeIn second" htmlFor="userName"> Username</label>
              <input onChange = {(event) => this.updateForm(event, "user")}  type="text" id="userName" className={userNameInputStyling}name="login" placeholder= {this.state.user}/>
            </div>
           {userTaken}
           <div className = "inputStyle">
            <label className = "inputLbl fadeIn second" htmlFor="userName"> Password</label>
            <input onChange = {(event) => this.updateForm(event, "password")} type="password" id="password" className="whiteBox fadeIn third" name="login" placeholder={this.state.password}/>
           </div>
            <input onClick = {submitFunc} type="submit" className="fadeIn fourth" value = "Enter" />
            {formFooter}
      </div>
      );
  }






  







  





  updateForm = (event, props) =>{


    const input = event.target.value;
    const tf = (input === "") ? false : true;



    switch (props) {
      case ("user"):
        this.setState({
          user: input,
          userValid: tf
        });
        break;
      case ("password"):

        this.setState({
          password: input,
          passwordValid: tf
        });
        break;
      case ("email"):

        this.setState({
          email: input,
          emailValid: tf
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
              <a  className="underlineHover" >Forgot Password?</a>
            </div>
  }
  returnEmail_UserTakenP = (email_user) =>{
    return <p className = "takenLbl"> {email_user} Already Taken</p>
  }

  returninvalidUser_PasswordLbl = () =>{
    return <p className = "takenLbl"> Invalid Username or Password</p>

  }


  validateCurrentInputs = (signUp) =>{ // checks to see if any fields are null 
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

    for ( let i = 0; i < validate.length; i++)
    {
      if ( validate[i])
      {
        sendToServer = true;

      }
      else
      { 
        sendToServer = false;
        break;
      }
    }
    return sendToServer;
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






    checkUser  = () =>{
    if ( this.validateCurrentInputs(false) )
    {
      const data = this.formatStateForServer();
      
      fetch('/login', data).then( (response) =>{
        if ( response.ok)
        {
          return response.json();
        }
      }).then( (val) =>{
        if ( val )
        {
          alert("Successfully Signed in");
          this.props.auth(true)
          if ( this._isMounted)
          {
            this.setState({
              redirect: true
            });
          }
        }
        else
        {
          this.setState({
            invalidUserPassword: true
          })
        }
        
      })
    }
    else
    {
      alert("Please include both fields");
    }
    
  }


  CreatUser = () =>{
    
    if ( this.validateCurrentInputs(true) )
    {
      const data = this.formatStateForServer(); 
      fetch('/signUp', data).then( (response) => {
          if ( response )
          {
            return response.json();
          }
        }).then( (val)  =>{
          
            let savedUser = true;

            if ( val.emailFound )
            {
              savedUser = false;
              this.setState({
                emailTaken: true
              })
            }
             if ( val.userFound )
            {
              savedUser = false;
              this.setState({
                userTaken: true
              })
            }
            if ( savedUser === true)
            {
              alert("Completed Sign Up");
            }
            
          
          
        });
      }
    else
      {
      
      alert("Please fill out all fields");
      }

    };




    toHome = () =>{
      if ( this._isMounted )
      {
        console.log("checkmount");
        
        this.setState({
          redirect: true
        });
      }
      else
      {
        alert("ahahhahahahahaaaaha");
      }
      
    }





  }
    

  






    
  

  





export default AuthenticateForm;