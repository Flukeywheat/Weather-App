import React, {Component} from 'react';
import './App.css';


import linksToArr from  "./components/Helper/GroupLinks";

import IntroSec from "./components/FrontPageHeader/frontPageIntroComps/IntroSec/IntroSec";
import NavBar from "./components/NavBar/NavBar";
import Weather from "./components/FrontPageHeader/frontPageIntroComps/Weather/Weather";
import FrontForm from  "./components/FrontPageHeader/frontPageIntroComps/FrontForm/FrontForm";
import LoginForm from "./components/Authentication/LoginForm/LoginForm";
import FrontPageHeader from "./components/FrontPageHeader/FrontPageHeader";










const tstTitles = ["Login", "Sign Up"];

const tmpObject = linksToArr(tstTitles);










class App extends Component {

  

  constructor(props) {
    super(props);

    this.state = {
      name: {
        fName: "Zach", key: "1"
      },
      weatherColors: null,
      loginActive: null,
      SignupActive: null,
      hideIntroSec: null
    }
  }











  


  

  

 


  render(){
    

    return (
      <div className="App">
        <NavBar 
          signUpVis = {this.state.SignupActive} 
          sendData = {this.getClickStatus}
          links = {tmpObject} 
          />
        <FrontPageHeader hidden = {this.state.hideIntroSec} />
        <LoginForm logVisible = {this.state.loginActive} />
      </div>
    );
  }



getClickStatus = (logOrSign) =>{
  if ( logOrSign )
  {
      this.setState({
        loginActive: true,
        hideIntroSec: true
      })
  }
  else
  {
    this.setState({
      SignupActive: true,
      hideIntroSec: true
    })
  }
}








getWeatherData = (weatherData) =>{
  this.setState({
    weatherColors: weatherData
  })
}











  
}

export default App;
