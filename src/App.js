import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import { Route } from "react-router-dom";
import './App.css';


import linksToArr from  "./components/Helper/GroupLinks";
import NavBar from "./components/NavBar/NavBar";
import AuthenticateForm from "./components/Authentication/AuthenticateForm";
import FrontPageHeader from "./components/FrontPageHeader/FrontPageHeader";
import SignedInPage from "./components/SignedInpage/SignedInPage";










const tstTitles = ["Login", "Sign Up"];

const tmpObject = linksToArr(tstTitles);










class App extends Component {

  

  constructor(props) {
    super(props);

    this.state = {
      weatherColors: null,
    }
  }











  


  

  

 


  render(){
    




    return (
      <BrowserRouter>
        <div className="App">
          <NavBar path = "/" links = {tmpObject} />
          <Route path = "/SignedIn" component = {SignedInPage}/>
          <Route path  = {["/", "/SignedIn"]} exact component =  {FrontPageHeader}/>
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
