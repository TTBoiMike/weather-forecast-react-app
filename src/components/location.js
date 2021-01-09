import React from 'react'
import Forecast from './forecast'
import { Accordion, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
// icon imports
import Sunny from '../assets/icons/sunny.png'
import MostlySunny from '../assets/icons/mostly-sunny.png'
import PartlySunny from '../assets/icons/partly-sunny.png'
import IntClouds from '../assets/icons/intermittent-clouds.png'
import HazySunshine from '../assets/icons/hazy-sunshine.png'
import Cloudy from '../assets/icons/cloudy.png'
import Dreary from '../assets/icons/dreary.png'
import Fog from '../assets/icons/fog.png'
import Showers from '../assets/icons/showers.png'
import CloudyWithShowers from '../assets/icons/mostly-cloudy-with-showers.png'
import MostlyCloudy from '../assets/icons/mostly-cloudy.png'
import PartlySunnyWithShowers from '../assets/icons/partly-sunny-with-showers.png'


class Location extends React.Component {

    displayIcon(phrase) {
        console.log(phrase)
        switch(phrase) {
            case "Sunny":
                return Sunny
            case "Mostly Sunny":
                return MostlySunny
            case "Partly Sunny":
                return PartlySunny
            case "Intermittent Clouds":
                return IntClouds
            case "Partly Sunny":
                return PartlySunny 
            case "Hazy Sunshine":
                return HazySunshine
            case "Mostly Cloudy":
                return MostlyCloudy
            case "Cloudy":
                return Cloudy
            case "Dreary":
                return Dreary
            case "Fog":
                return Fog
            case "Showers":
                return Showers
            case "Mostly Cloudy w/ Flurries":
                return CloudyWithShowers
            case "Partly Sunny w/ Flurries":
                return PartlySunnyWithShowers
        }
    }

    render() {
        return (
            <div style={this.props.appInformation.location === "" ? {display: "none"} : {display: "block"}} className="location">
                <div className="banner"></div>
                <div className="location-current-conditions">
                    <div className="current-weather-icon">
                        <img src={this.displayIcon(this.props.appInformation.currentWeather.summary)}></img>
                    </div>
                    <h4>{this.props.appInformation.location}</h4>
                    <p>{this.props.appInformation.currentWeather.summary}</p>
                    <p className="temp">{Math.floor(this.props.appInformation.currentWeather.temperature)}<sup> o</sup>C</p>
                </div>
                <Accordion>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <p>5 Day Weather Forecast</p>
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Forecast forecast={this.props.forecast}/>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default Location