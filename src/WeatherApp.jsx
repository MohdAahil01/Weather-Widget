import SearchBox from './Searchbox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
let[weatherInfo, setWeatherInfo]= useState({
    city: "Delhi",
    feelsLike: 23.63,
    humidity: 43,
    temp: 24.05,
    tempMax: 24.05,
    tempMin: 24.05,
    weather: "haze"
});

let updateInfo=(newInfo)=> {
    setWeatherInfo(newInfo);
}

    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather App by Mohd Aahiluddin Shaikh</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}