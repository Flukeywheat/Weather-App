import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import './App.css';


import linksToArr from  "./components/Helper/GroupLinks";
import NavBar from "./components/NavBar/NavBar";
import AuthenticateForm from "./components/Authentication/AuthenticateForm";
import FrontPageHeader from "./components/FrontPageHeader/FrontPageHeader";
import SignedInPage from "./components/SignedInpage/SignedInPage";
import { restElement, thisExpression } from '@babel/types';










const tstTitles = ["Login", "Sign Up"];

const tmpObject = linksToArr(tstTitles);










class App extends Component {

  

  constructor(props) {
    super(props);

    this.state = {
      authUser:false
    }
  }











  


  

  

 


  render(){
    console.log(this.state);
    
    



    return (
      <BrowserRouter>
        <div className="App">
          <NavBar path = "/" links = {tmpObject} />
          <Route path  = "/" exact component =  {FrontPageHeader}/>
          <PrivateRoute exact path = "/userpage" component = {SignedInPage} authed = {this.state.authUser} />
          <Route path = "/login" exact id = "loginPage"  exact component = {() => <AuthenticateForm formType = "login"   auth = {this.getAuthUser}/>}/>
          <Route path = "/sign up" exact  id = "signUpPage"  exact component = {() => <AuthenticateForm formType = "signUp"/>}/>
        </div>
      </BrowserRouter>
    );
  }




 

  getAuthUser = (authorized) =>{
    
    
    const user = (authorized) ? true : false;
    this.setState({
      authUser: user
    });
    console.log(this.state.authUser + "tst");
  };

  
  

   
   
  






}


function PrivateRoute({component: Component, authed, ...rest}){
  console.log("something");
  
  return (
    <Route {...rest} render = { (props) => {
      return (authed) ? <Component {...props} /> : <Redirect to ={{pathname: "/login"}} />
    }} />
  )
}



  


export default App;
