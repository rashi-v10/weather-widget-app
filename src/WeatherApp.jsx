import SearchBox from './SearchBox';
import InfoBox from "./InfoBox"
import { useState } from 'react'; 

export default function WeatherApp(){
    
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Wonderland",
        feelsLike: 36.63,
        humidity : 74,
        temp: 30.22,
        tempMax: 30.22,
        tempMin: 30.22,
        weather : "overcast clouds",
    });
    

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>WeatherApp by Rashi</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
};