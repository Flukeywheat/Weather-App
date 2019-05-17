import React,{Component} from "react";



class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
            lat:null,
            long:null,
            tst:null
        }
        
        
    }


    
    
    async componentDidMount()
    {
        await Promise.all([this.getLocation(), this.weatherAPI()])


        
        
       

        

        
    }



    render(){
        return(
            <div>
                <p>Latitude: {this.state.lat}</p>
                <p>Longitude: {this.state.long}</p>
            </div>
        )
    }





    getLocation = () =>{


        if ( navigator.geolocation )
        {
            navigator.geolocation.getCurrentPosition((position) =>{
                const tmpLat = position.coords.latitude;
                const tmpLong = position.coords.longitude;

                this.setState({
                    lat: tmpLat,
                    long: tmpLong
                })
         
            })
        }
        

    }


    weatherAPI = () =>{
        console.log(this.state.lat);
        fetch("https://api.weather.gov").then( (res) =>{
                
                console.log(this.state.lat);
                
                
            })
    }

}

export default Weather;