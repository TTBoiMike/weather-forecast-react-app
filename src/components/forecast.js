import React from 'react'

class Forecast extends React.Component {

    parseDate(dateTime) {
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
          const day = new Date(parseInt(dateTime) * 1000);
          const today = new Date(Date.now());
          let nameDay = days[day.getDay(day)];
          const todayName = days[today.getDay(today)];
          nameDay = nameDay === todayName ? "Today" : nameDay;
          const date = day.getDate(day);
          const monthDate = nameDay + " " + date;
          return monthDate
    }

    buildForecastHTML() {
        return this.props.forecast.map((day, i) => (
            <section className="d-flex justify-content-between align-items-center forecast-container" key={i} id={i}>
                <div>
                    <p><strong>{this.parseDate(day.dt)}</strong></p>
                    <p className="forecast-text">Summary: {day.weather[0].description}<br/>Wind speed: {Math.round(day.wind_speed)}mph<br/>Chance of rain: {Math.round(day.pop * 100)}%</p>
                </div>
                <div className="d-flex align-items-center">
                    <img src={this.props.icon(day.weather[0].icon, true)} alt="weahter icon"></img>
                    <div className="text-center">
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