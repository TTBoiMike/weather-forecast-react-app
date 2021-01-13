import React from 'react'
import Search from './search'
import Location from './location'
import {ApiClient} from '../apiClient'
import '../App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: "",
      currentWeather: {
        temperature: "",
        windSpeed: "",
        summary: "",
        isDayTime: undefined
      },
      iconDisplay: undefined,
      forecast: []
    }
    this.ApiClient = new ApiClient()
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

  fetchAppData = (input, areaCode) => {
    this.ApiClient.getLocation(input, areaCode)
    .then(data => data.json())
    .then(json => {
      console.log(json)
      this.setState({
        location: json.name
      })
      this.ApiClient.getForecast(json.coord.lon, json.coord.lat)
        .then(data => data.json())
        .then(json => {
            this.setState({
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
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Search updatelocation={this.fetchAppData}/>
        <Location appInformation={this.state} clearapp={this.clearApp}/>
      </div>
    )
  }
}

export default App