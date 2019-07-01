import React from "react";
import "./SignedInPage.css";


const SignedInPage = (props) =>{
    return (
        <div className = "LoginScreen">
            <p> Hello {props.userName} you have successfully signed in </p>
        </div>
    );
}




export default SignedInPage;


