import React from 'react'
import Search from './search'
import Location from './location'
import Forecast from './forecast'
import '../App.css';


// API Key - 5TdNcG6ZLvSwSwmGUIFTnlWfUSdQyh8X

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      location: "",
      locationKey: "",
      currentWeather: {
        temperature: "",
        summary: "",
        isDayTime: undefined
      },
      forecast: []
      // {date: , minTemperature: , maxTemperature: , dayTime: "", nightTime: ""}
    }
  }

  updateLocation = (input, areaCode) => {
    let city = input.toLowerCase();
    // call fecth to api to retrieve city information
    let locationApiResponse = fetch(`http://dataservice.accuweather.com/locations/v1/cities/${areaCode}/search?apikey=5TdNcG6ZLvSwSwmGUIFTnlWfUSdQyh8X&q=${city}`)
    locationApiResponse.then((data) => {
      data.json().then((json) => {
        this.updateCurrentWeather(json[0].Key)
        this.updateForecast(json[0].Key)
        this.setState({
          location: json[0].LocalizedName,
          locationKey: json[0].Key
        })
      }).catch((err) => {
        console.log(err)
        alert(`Sorry, we couldn't find any information for: ${input}, ${areaCode}.`)
      })
    })
  }

  updateCurrentWeather(locationKey) {
    let currentWeatherApiResponse = fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=5TdNcG6ZLvSwSwmGUIFTnlWfUSdQyh8X`)
    currentWeatherApiResponse.then((data) => {
      data.json().then((json) => {
        this.setState({
          currentWeather: {
            temperature: json[0].Temperature.Metric.Value,
            summary: json[0].WeatherText
          }
        })
      })
    })
  }

  // update the forecast for the location using the 'location key'
  updateForecast(locationKey) {
    let forecastApiResponse = fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=5TdNcG6ZLvSwSwmGUIFTnlWfUSdQyh8X`)
    forecastApiResponse.then((data) => {
      data.json().then((json) => {
        this.setState({
          forecast: json.DailyForecasts
        })
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Search updatelocation={this.updateLocation}/>
        <Location appInformation={this.state} forecast={this.state.forecast}/>
      </div>
    )
  }
}

export default App