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


    
    componentWillMount(){
        this.getLocation()
    }
   

    componentDidMount(){
        console.log(this.state.lat);
        fetch("https://api.weather.gov").then((res) =>{
            
        });
    }



    render(){
        return(
            <div></div>
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
        return true;

    }


    

}

export default Weather;