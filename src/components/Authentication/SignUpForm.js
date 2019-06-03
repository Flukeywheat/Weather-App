import React from "react";
import "./LoginForm.css";
import "../FrontPageHeader/frontPageIntroComps/FrontForm/FrontForm.css";




const  SignUpForm = (props) =>{

    let visibility = "hidden"
    if ( props.logVisible )
    {
      visibility = "visible slideUp";
    }



    return (
        <div id="formContent" className = {visibility} >
        <form action="" method="post">
          <input  id = "login" type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="re-enter password"/>
          <input type="submit" className="fadeIn fourth" value="Log In"/>
        </form>
        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div>
    
      </div>
      
    );
}

export default SignUpForm;