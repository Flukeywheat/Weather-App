import React from "react";
import "./FrontForm.css";


import AmazonLinks from  "./amazonLinks/AmazonLinks";


const FrontForm = () =>{
    return (
        <div className = "boxShade ">
          <h1 className = "slideInLeft">Here are some <span className = "Notice">Ideas </span> for you!!</h1>
          <AmazonLinks/>
        </div>
    )
}



export default FrontForm;
