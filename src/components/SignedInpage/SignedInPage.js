import React from "react";
import "./SignedInPage.css";


const SignedInPage = (props) =>{


    console.log("Signed IN");
    

    return (
        <div className = "LoginScreen">
            <p> Hello {props.userName} you have successfully signed in </p>
        </div>
    );
}




export default SignedInPage;


