import React from "react";
import axios from "axios";
 
import "./LoginForm.css";
import "../FrontPageHeader/frontPageIntroComps/FrontForm/FrontForm.css";




const  LoginForm = (props) =>{

    let visibility = "hidden"
    if ( props.logVisible )
    {
      visibility = "visible slideUp";
    }

  
    

    return (
        <div id="formContent" className = {visibility} >
        
          <input  id = "login" type="text" id="login" className="fadeIn second" name="login" placeholder= {props.tst}/>
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
          <input onClick = {props.contactServer} type="submit" className="fadeIn fourth"/>
   
    
        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div>
    
      </div>
      
    );
}



    
  

  





export default LoginForm;