import React from 'react'

class Forecast extends React.Component {

    buildForecastHTML() {
        return this.props.forecast.map((day, i) => (
            <section className="d-flex justify-content-between align-items-center" key={i} id={i}>
                <div>
                    <p><strong>Date</strong></p>
                    <p className="forecast-text">{day.weather[0].description}<br/>wind speed: {Math.round(day.wind_speed)}mph<br/>Chance of rain: {Math.round(day.pop * 100)}%</p>
                </div>
                <div className="d-flex align-items-center">
                    <img src={this.props.icon(day.weather[0].icon, true)}></img>
                    <div>
                        <p className="forecast-temp-max">{Math.round(day.temp.max)}<sup>o</sup>C</p>
                        <p>{Math.round(day.temp.min)}<sup>o</sup>C</p>
                    </div>
                </div>
            </section>
        ))
    }



    render() {
        return (
            <div className="forecast">
                {this.buildForecastHTML()}
            </div>
        )
    }
}

export default Forecast