import React from "react";
import  "./IntroSec.css";

const IntroSec= (props) =>{


    const tempKey = props.weather;
    let cssString;
    let clothRec;
    

    const  display = (props.hidden) ? "hidden" : "show";
    console.log(props.hidden);
    
    




    let BackColorClass = ["jumbotron", display ];

    
    if ( tempKey != null )
    {
            if ( tempKey  <=  32 )
        {
            BackColorClass.push("coldSkyGrad");
            clothRec = "Winter"
        }
        else if ( tempKey <= 70)
        {
            BackColorClass.push("chillySkyGrad");
            clothRec = "Mild Weather"
        }
        else
        {
            BackColorClass.push("warmSkyGrad");
            clothRec = "Summer"
        }
        cssString =  BackColorClass.join(" ");
    }
    
        


    










    return (
        <div className = {cssString}>
            <h1  className = "h1FadeIn ">Hi</h1>
            <p className = "pFadeIn ">Today's Recommendation: {clothRec} attire</p>
            
        </div>
    );
}


export default IntroSec;