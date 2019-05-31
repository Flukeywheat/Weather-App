import React from "react";
import "./LoginForm.css";
import "../../FrontPageHeader/frontPageIntroComps/FrontForm/FrontForm.css";




const  LoginForm = (props) =>{

    let visibility = "hidden"
    if ( props.logVisible )
    {
      visibility = "visible";
    }



    return (
        <div id="formContent" className = {visibility}>
        <form action="" method="post">
          <input  id = "login" type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
          <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
          <input type="submit" class="fadeIn fourth" value="Log In"/>
        </form>
    
        <div id="formFooter">
          <a class="underlineHover" href="#">Forgot Password?</a>
        </div>
    
      </div>
      
    );
}

export default LoginForm;