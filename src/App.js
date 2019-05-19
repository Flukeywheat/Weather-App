import React, {Component} from 'react';
import './App.css';


import linksToArr from  "./components/Helper/GroupLinks";

import IntroDiv from "./components/IntroSec/IntroSec";
import NavBar from "./components/NavBar/NavBar";
import Weather from "./components/Weather/Weather";
import FrontForm from  "./components/FrontForm/FrontForm";











const tstTitles = ["Login", "Sign Up"];
const tstLinks = ["/djkdjkjfikdkjfk", "jkdkjfiijek"];

const tmpObject = linksToArr(tstTitles, tstLinks);










class App extends Component {

  

  constructor(props) {
    super(props);

    this.state = {
      name: {
        fName: "Zach", key: "1"
      },
      weatherColors: null
    }
  }











  


  

  

 


  render(){
    return (
      <div className="App">
        <NavBar links = {tmpObject} />
        <IntroDiv weather = {this.state.weatherColors} click = {this.btnClick} name = {this.state.name.fName}/>
        <Weather />
        <FrontForm />
      </div>
    );
  }


















btnClick = () =>{
    const tmpName = this.state.name.fName;
    const tmpKey = this.state.name.key;
    
    let nName = (tmpName === "Zaen") ? "Zach" : "Zaen";
    
    this.setState(
      {
        name: {
          fName: nName, key: tmpKey
      }
      }
    )
    
  };





  
}

export default App;
