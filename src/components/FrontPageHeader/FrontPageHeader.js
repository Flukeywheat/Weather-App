import React from "react"
import IntroSec from "../IntroSec/IntroSec"
import Weather from "../Weather/Weather";
import FrontForm from "../FrontForm/FrontForm";
import { directive } from "@babel/types";



const FrontPageHeader = () =>{
    return (
        <div>
            <Weather />
            <IntroSec />
            <FrontForm />
        </div>
        

    )


}


export default FrontPageHeader;