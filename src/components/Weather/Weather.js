import React,{Component} from "react";
import axios from "axios";
import { logicalExpression } from "@babel/types";



class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
            lat:null,
            long:null,
            tst:null
        }
        
        
    }


    
    

    componentDidMount(){
        
        getAddress().then( (res) =>{
           const tmpLat = res.latitude;
           const tmpLong = res.longitude;

           const weatherApi = "https://api.weather.gov/points/" + tmpLat + "," + tmpLong + "/forecast";
           console.log(weatherApi);
           
           
            
            axios.get(weatherApi).then( (res) =>{
                console.log(res);
                
            })
        })

        
    }



    render(){
        return(
            <div></div>
        )
    }





 
}

export default Weather;



 function getAddress(){

    return new Promise( (res, rej) =>{
        navigator.geolocation.getCurrentPosition( (pos) =>{
            res(pos.coords);
        });
    });
    
    }

