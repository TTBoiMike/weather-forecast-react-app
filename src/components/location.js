import React from 'react'
import Forecast from './forecast'
import { Accordion, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import D1 from '../assets/icons/01d.png'
import N1 from '../assets/icons/01n.png'
import D2 from '../assets/icons/02d.png'
import N2 from '../assets/icons/02n.png'
import D3 from '../assets/icons/03d.png'
import N3 from '../assets/icons/03n.png'
import D4 from '../assets/icons/04d.png'
import N4 from '../assets/icons/04n.png'
import D9 from '../assets/icons/09d.png'
import N9 from '../assets/icons/09n.png'
import D10 from '../assets/icons/10d.png'
import N10 from '../assets/icons/10n.png'
import D11 from '../assets/icons/11d.png'
import N11 from '../assets/icons/11n.png'
import D13 from '../assets/icons/13d.png'
import N13 from '../assets/icons/13n.png'
import D50 from '../assets/icons/50d.png'
import N50 from '../assets/icons/50n.png'
import Daytime from '../assets/daytime-header.jpg'
import Nighttime from '../assets/night-sky-header.jpg'

class Location extends React.Component {

    displayIcon(code, time) {
        if(time) {
            switch(code) {
                case "01d":
                    return D1
                case "02d":
                    return D2
                case "03d":
                    return D3
                case "04d":
                    return D4
                case "09d":
                    return D9
                case "10d":
                    return D10
                case "11d":
                    return D11
                case "13d":
                    return D13
                case "50d":
                    return D50
            }
        } else {
            switch (code) {
                case "01n":
                    return N1
                case "02n":
                    return N2
                case "03n":
                    return N3
                case "04n":
                    return N4
                case "09n":
                    return N9
                case "10n":
                    return N10
                case "11n":
                    return N11
                case "13n":
                    return N13
                case "50n":
                    return N50
            }
        }
    }

    render() {
        return (
            <div style={this.props.appInformation.location === "" ? {display: "none"} : {display: "block"}} className="location">
                <div className="banner" style={{backgroundImage: this.props.appInformation.currentWeather.isDayTime ? `url(${Daytime})` : `url(${Nighttime})`}}></div>
                <div className="location-current-conditions">
                    <div className="current-weather-icon">
                        <img src={this.displayIcon(this.props.appInformation.iconDisplay, this.props.appInformation.currentWeather.isDayTime)}></img>
                    </div>
                    <h4>{this.props.appInformation.location}</h4>
                    <p>{this.props.appInformation.currentWeather.summary}</p>
                    <div>
                        <h1 className="temp">{Math.floor(this.props.appInformation.currentWeather.temperature)}<sup> o</sup>C</h1>
                        <p>Wind speed: {this.props.appInformation.currentWeather.windSpeed} mph</p>
                    </div>
                </div>
                <Accordion>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <p><strong>View Weather Forecast</strong></p>
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Forecast forecast={this.props.appInformation.forecast} icon={this.displayIcon}/>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default Location