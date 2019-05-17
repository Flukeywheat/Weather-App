import React from "react";
import "./IntroSec.css";

const IntroDiv = (props) =>{
    


    return (
        <div className = "jumbotron coldSkyGrad">
            <h1  className = "h1FadeIn ">Hi</h1>
            <p className = "pFadeIn ">Based on current metrics, Winter Clothes are recommended today</p>
        </div>
    );
}


const changePar = (name) =>{
    const myName = "Zaen";
    let parString;
    

    if (name.toUpperCase() === myName.toUpperCase())
    {
        parString = "Not Really, I'm just messing with ya!!";
    }
    else
    {
        parString = "It truly is a travesty to meet you!!";
        
    }
    return (
        <p className = "muted-text">{parString}</p>
    )


}





export default IntroDiv;