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
          <this.PrivateRoute path = "/SignedIn" exact component = {SignedInPage} />
          <Route path  = "/" exact component =  {FrontPageHeader}/>
          <Route path = "/login" exact id = "loginPage"  exact component = {() => <AuthenticateForm formType = "login"   auth = {this.getAuthUser}/>}/>
          <Route path = "/sign up" exact  id = "signUpPage"  exact component = {() => <AuthenticateForm formType = "signUp"/>}/>
        </div>
      </BrowserRouter>
    );
  }




 

  getAuthUser = (authorized) =>{
    const user = (authorized) ? true : false;
    alert("set true");   
    this.setState({
      authUser: user
    });
  };

  checkAuth = () =>{
    const tst = (this.state.authUser) ? true : false;
    console.log(tst);
    
    return tst
  }
  

   PrivateRoute = ({component: Component, ...rest}) =>{
     console.log(this.checkAuth());
     

    if ( this.checkAuth())
    {
      console.log("check");
      
      return <Route {...rest} render = {props =>{
        return <Component {...props}/>
      }}/>
    }
    else
    {
      return <Redirect to = {{pathname:"/login"}} />
    }

   
  };
  






}






  


export default App;
