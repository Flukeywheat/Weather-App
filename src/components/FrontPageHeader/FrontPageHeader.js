import React, {Component} from "react"
import IntroSec from "./frontPageIntroComps/IntroSec/IntroSec"
import Weather from "./frontPageIntroComps/Weather/Weather";
import FrontForm from "./frontPageIntroComps/FrontForm/FrontForm";
import "./FrontPageHeader.css";
import { directive } from "@babel/types";



class FrontPageHeader extends Component{

    constructor(props) {
        super(props);



        this.state = {
          weatherColors: null,
          headerDelay:null
        }
      };



     

    render() {    
      


        return(
        <div >
           <IntroSec hDelay = {this.state.headerDelay} weather = {this.state.weatherColors} />
           <FrontForm />
           <Weather sendData = {this.getWeatherData} />
            
        </div>
        );

    }



    getWeatherData = (weatherData) =>{
        this.setState({
          weatherColors: weatherData
        })
      }



}




export default FrontPageHeader;