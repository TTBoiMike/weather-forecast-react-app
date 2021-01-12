import React from 'react'
import Search from './search'
import Location from './location'
// import Forecast from './forecast'
import '../App.css';


// API Key - 5TdNcG6ZLvSwSwmGUIFTnlWfUSdQyh8X

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      location: "",
      coordinates: {
        lon: "",
        lat: ""
      },
      currentWeather: {
        temperature: "",
        windSpeed: "",
        summary: "",
        isDayTime: undefined
      },
      iconDisplay: undefined,
      forecast: []
    }
  }

  clearApp = () => {
    this.setState({
        location: "",
        coordinates: {
          lon: "",
          lat: ""
        },
        currentWeather: {
          temperature: "",
          windSpeed: "",
          summary: "",
          isDayTime: undefined
        },
        iconDisplay: undefined,
        forecast: []
    })
  }

  determineDayTime(code) {
    if (code.includes("n")) {
      return false
    } else {
      return true
    }
  }

  updateLocation = (input, areaCode) => {
    let city = input.toLowerCase();
    // call fecth to api to retrieve city information
    let locationApiResponse = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${areaCode}&appid=02ef4d3d345333c1a5f6f1a75f10207c&units=metric`)
    locationApiResponse.then((data) => {
      data.json().then((json) => {
        console.log("json", json)
        this.updateForecast(json.name, json.coord.lon, json.coord.lat)
      }).catch((err) => {
        console.log(err)
        alert(`Sorry, we couldn't find any information for: ${input}, ${areaCode}.`)
      })
    })
  }

  // // update the forecast for the location using the location coordinates
  updateForecast(location, long, lat) {
    let forecastApiResponse = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,alerts,hourly&appid=02ef4d3d345333c1a5f6f1a75f10207c&units=metric`)
    forecastApiResponse.then((data) => {
      data.json().then((json) => {
        this.setState({
          location: location,
          coordinates: json.coord,
          currentWeather: {
            temperature: Math.round(json.current.temp),
            windSpeed: Math.round(json.current.wind_speed),
            summary: json.current.weather[0].description,
            isDayTime: this.determineDayTime(json.current.weather[0].icon)
          },
          iconDisplay: json.current.weather[0].icon,
          forecast: json.daily.slice(1, 8)
        })
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Search updatelocation={this.updateLocation}/>
        <Location appInformation={this.state} clearapp={this.clearApp}/>
      </div>
    )
  }
}

export default App