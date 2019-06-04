import React, {Component} from 'react';
import './App.css';


import linksToArr from  "./components/Helper/GroupLinks";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/Authentication/LoginFrom";
import SignUpForm from "./components/Authentication/SignUpForm";
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
      loginActive: false,
      SignupActive: false,
      hideIntroSec: false
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
        <SignUpForm logVisible = {this.state.SignupActive} />
      </div>
    );
  }



getClickStatus = (log_Sign) =>{
  console.log(log_Sign);
  
  if ( log_Sign === "Login" )
  {
    this.setState({
        loginActive: true,
        SignupActive: false,
        hideIntroSec: true
      })
  }
  else
  {
    this.setState({
      SignupActive: true,
      loginActive: false,
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
