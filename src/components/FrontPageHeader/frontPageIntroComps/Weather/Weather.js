import React,{Component} from "react";
import axios from "axios";
import "./Weather.css"



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
            this.useWeatherAPi(res);
        });

        
    }



    render(){
        return(
            <div className = "WeatherInfo">
                <p id = "pInfo">Current Temperature <kbd>{this.state.curTemp}</kbd></p>
                <p id = "pInfo"> {this.state.forcast}</p>
            </div>
        )
    }






    sendWeatherData = (temp) =>{
        this.props.sendData(temp);
    }


    

    useWeatherAPi = (res) =>{
    
            const tmpLat = res.latitude;
           const tmpLong = res.longitude;

           const weatherApi = "https://api.weather.gov/points/" + tmpLat + "," + tmpLong + "/forecast";
           
           
           
            
            axios.get(weatherApi).then( (res) =>{


                const foreCastArr = [];
               


                const periodsOfDay =  res.data.properties.periods;
                const dayNight = periodsOfDay[0].isDaytime; //Checking to see if daytime 
                const perNums = ( dayNight ) ? 2 : 3;
                const begTempString = periodsOfDay[0].temperature + "°F";;
                this.sendWeatherData(periodsOfDay[0].temperature);



                

                for (let i = 0; i < perNums; i++)
                {
                    foreCastArr.push(periodsOfDay[i]);
                    if ( !dayNight && i === 0 )
                    {
                       
                        const tmpString = "Tonight's forecast: " + periodsOfDay[i].detailedForecast; 

                        
                        this.setState({
                            curTemp: begTempString,
                            forcast: tmpString
                        })
                    }
                    else
                    {

                        const tmpString = "Today's forecast: " + periodsOfDay[i].detailedForecast;

                        this.setState({
                            curTemp: begTempString,
                            forcast: tmpString
                        })
                    }
                }
                
             
                
                
                
                
            })
        
        


    }

 
}

export default Weather;
















const  getAddress = () =>{

    return new Promise( (res, rej) =>{
        navigator.geolocation.getCurrentPosition( (pos) =>{
            console.log(pos);
            
            res(pos.coords);
        });
    });
    
    }

