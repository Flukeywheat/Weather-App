import React,{Component} from "react";
import axios from "axios";
import { logicalExpression } from "@babel/types";



class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
            curTemp:null,
            forcast:null
        }
        
        
    }


    
    

    componentDidMount(){
        
        getAddress().then( (res) =>{
           const tmpLat = res.latitude;
           const tmpLong = res.longitude;

           const weatherApi = "https://api.weather.gov/points/" + tmpLat + "," + tmpLong + "/forecast";
           
           
           
            
            axios.get(weatherApi).then( (res) =>{


                const foreCastArr = [];
               


                const periodsOfDay =  res.data.properties.periods;
                const dayNight = periodsOfDay[0].isDaytime; //Checking to see if daytime 
                const perNums = ( dayNight ) ? 2 : 3;



                console.log(perNums);
                

                for (let i = 0; i < perNums; i++)
                {
                    foreCastArr.push(periodsOfDay[i]);
                    if ( !dayNight && i === 0 )
                    {
                        const temp = "Current temperature: " + periodsOfDay[0].temperature + "°F";
                        const tmpString = "Tonight's forecast: " + periodsOfDay[0].detailedForecast; 



                        this.setState({
                            curTemp: temp,
                            forcast: tmpString
                        })
                    }
                    else
                    {

                    }
                }
                

                console.log(this.state.tst);
                
                console.log(res.data.properties.periods);
                
            })
        })

        
    }



    render(){
        return(
            <div>
                <p>{this.state.curTemp}</p>
                <p>{this.state.forcast}</p>
            </div>
        )
    }





 
}

export default Weather;








const useWeatherAPi = (res) =>{




}







const  getAddress = () =>{

    return new Promise( (res, rej) =>{
        navigator.geolocation.getCurrentPosition( (pos) =>{
            res(pos.coords);
        });
    });
    
    }

