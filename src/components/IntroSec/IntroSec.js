import React from "react";
import  "./IntroSec.css";

const IntroSec= (props) =>{


    const tempKey = props.weather;
    let cssString;
    

    console.log("tst" + tempKey);
    
    




    let BackColorClass = ["jumbotron"];

    if ( tempKey === "freeze" )
    {
        BackColorClass.push("coldSkyGrad");
    }
    else if ( tempKey === "chill")
    {
        BackColorClass.push("chillySkyGrad");
    }
    else if ( tempKey === "storm")
    {
        BackColorClass.push("stormSkyGrad");
    }
    else
    {
        BackColorClass.push("warmSkyGrad");
    }
    cssString =  BackColorClass.join(" ");
        













    return (
        <div className = {cssString}>
            <h1  className = "h1FadeIn ">Hi</h1>
            <p className = "pFadeIn ">Based on current metrics, Winter Clothes are recommended today</p>
            
        </div>
    );
}


export default IntroSec;