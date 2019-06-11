import React, {Component} from 'react';
import './App.css';


import linksToArr from  "./components/Helper/GroupLinks";
import NavBar from "./components/NavBar/NavBar";
import AuthenticateForm from "./components/Authentication/AuthenticateForm";
import FrontPageHeader from "./components/FrontPageHeader/FrontPageHeader";










const tstTitles = ["Login", "Sign Up"];

const tmpObject = linksToArr(tstTitles);










class App extends Component {

  

  constructor(props) {
    super(props);

    this.state = {
      name: "Zach",
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
        <AuthenticateForm  logVisible = {this.state.loginActive} />
        <AuthenticateForm formType = "signUp"  logVisible = {this.state.SignupActive} />
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
