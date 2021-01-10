import React from 'react'

class Forecast extends React.Component {

    buildForecastHTML() {
        return this.props.forecast.map((day, i) => (
            <section className="forecast-container" key={i} id={i}>
                <div>
                    <div className="forecast-main">
                        <h5>{(day.Date.substr(0, day.Date.length-15))}</h5>
                        <div>
                            <p>Daytime: {day.Day.IconPhrase}</p>
                            <p>Nighttime: {day.Night.IconPhrase}</p>
                        </div>
                        <div>
                            
                            <div>
                                <p>{Math.floor((day.Temperature.Maximum.Value - 32) * 0.55)}<sup> o</sup>C</p>
                                <p>{Math.floor((day.Temperature.Minimum.Value - 32) * 0.55)}<sup> o</sup>C</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="forecast-footer">
                        <a href={day.Link} target="_self">More details</a>
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