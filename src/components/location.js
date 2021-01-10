import React from 'react'
import Forecast from './forecast'
import { Accordion, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
//icon imports

class Location extends React.Component {

    // displayIcon(phrase, time) {
    //     console.log(phrase, time)
    //     if(time) {
    //         console.log("day")
    //     } else {
    //         console.log("night")
    //     }
    // }

    render() {
        return (
            <div style={this.props.appInformation.location === "" ? {display: "none"} : {display: "block"}} className="location">
                <div className="banner"></div>
                <div className="location-current-conditions">
                    <div className="current-weather-icon">
                        {/* <img src={this.displayIcon(this.props.appInformation.currentWeather.summary, this.props.appInformation.currentWeather.isDayTime)}></img> */}
                    </div>
                    <h4>{this.props.appInformation.location}</h4>
                    <p>{this.props.appInformation.currentWeather.summary}</p>
                    <div>
                    <p className="temp">{Math.floor(this.props.appInformation.currentWeather.temperature)}<sup> o</sup>C</p>
                    <p>{this.props.appInformation.currentWeather.windSpeed} mph</p>
                    </div>
                </div>
                <Accordion>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <p><strong>5 Day Weather Forecast</strong></p>
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {/* <Forecast forecast={this.props.forecast}/> */}
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default Location