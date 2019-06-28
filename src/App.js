import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import { Route } from "react-router-dom";
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
      weatherColors: null,
      loginActive: false,
      SignupActive: false,
      hideIntroSec: false
    }
  }











  


  

  

 


  render(){
    

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar links = {tmpObject} />
          <Route path  = "/" exact component =  {FrontPageHeader}/>
          <Route path = "/login" exact id = "loginPage"  exact component = {() => <AuthenticateForm formType = "login"/>}/>
          <Route path = "/sign up" exact  id = "loginPage"  exact component = {() => <AuthenticateForm formType = "signUp"/>}/>

        </div>
      </BrowserRouter>
    );
  }


















getWeatherData = (weatherData) =>{
  this.setState({
    weatherColors: weatherData
  })
}




}






  


export default App;
