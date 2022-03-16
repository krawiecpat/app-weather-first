import React from "react";
import './WeatherCity.css';

function WeatherCity(props) {


    let weatherCity = props.weatherCity;
    let liElements = weatherCity.map((weatherObj) =>{
        return(
            <li key={weatherObj.currency} className="CityElement">
                    <span className="NameCity">{weatherObj.stacja}</span>
                    <span className="TempCity blue">Temperatura: {weatherObj.temperatura} </span>
                    <span className="WetCity">Wilgotność: {weatherObj.wilgotnosc}</span>
                    <span className="ThrustCity">Ciśnienie:{weatherObj.cisnienie}</span>
                </li>
        );
     });

    console.log(weatherCity);

    return (
        <div className="WeatherList">
            <ul className="TheList">
                {liElements}
            </ul>
        </div>
    );

}

export default WeatherCity;