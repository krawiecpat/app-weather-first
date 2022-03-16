import React, { Component } from 'react';
import WeatherCity from './WeatherCity';
import './Weather.css';

import axios from 'axios';

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherCity: []
        };
    }

    componentDidMount() {
        this.getWeatherData();

    }


    // componentWillUnmount();

    getWeatherData = () => {
        axios.get('https://danepubliczne.imgw.pl/api/data/synop').then(res => {
            const temps = res.data;

            this.setState((state) => {
                let newWeatherList = [];

                for (const [temp, weatherObj] of Object.entries(temps)) {
                    let tempObj= state.weatherCity.find((weatherObj) => {
                        return(weatherObj.temperatura = tempObj)
                    });
                    console.log(tempObj)

                    let newWeatherObj = {
                        currency: temp,
                        stacja: weatherObj.stacja,
                        temperatura: weatherObj.temperatura,
                        wilgotnosc: weatherObj.wilgotnosc_wzgledna,
                        cisnienie: weatherObj.cisnienie
                    }

                    newWeatherList.push(newWeatherObj);
                }
                console.log(newWeatherList);

                return({
                    weatherCity: newWeatherList
                });
            });
        });
    }


    render() {
        return (
            <div className="Weather">
                <WeatherCity weatherCity={this.state.weatherCity}/>
            </div>
        );
    }
}



export default Weather;