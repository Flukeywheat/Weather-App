import React, {Component} from 'react';
import './App.css';


import linksToArr from  "./components/Helper/GroupLinks";

import IntroSec from "./components/IntroSec/IntroSec";
import NavBar from "./components/NavBar/NavBar";
import Weather from "./components/Weather/Weather";
import FrontForm from  "./components/FrontForm/FrontForm";
import LoginForm from "./components/Authentication/LoginForm/LoginForm";











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
      SignupActive: null
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
        <IntroSec weather = {this.state.weatherColors}  name = {this.state.name.fName}/>
        <Weather sendData = {this.getWeatherData}/>
        <FrontForm />
        <LoginForm logVisible = {this.state.loginActive} />
      </div>
    );
  }



getClickStatus = (logOrSign) =>{
  if ( logOrSign )
  {
      this.setState({
        loginActive: true
      })
  }
  else
  {
    this.setState({
      SignupActive: true
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
