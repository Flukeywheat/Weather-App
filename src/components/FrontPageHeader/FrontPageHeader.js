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
          hideIntroSec: null
        }
      }



    render() {

      const visible = (this.props.hidden) ? "hidden" : "visible";


        return(
        <div className = {visible}>
           <IntroSec weather = {this.state.weatherColors} />
            <Weather sendData = {this.getWeatherData} />
            <FrontForm />
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