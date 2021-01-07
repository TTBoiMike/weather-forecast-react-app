import React from 'react'
import Search from './search'
import Location from './location'
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
    }
  }

  updateApp() {
    // update the state with information for location, current weather & forecast
  }

  updateLocation = (input) => {
    let city = input.toLowerCase();
    // call fecth to api to retrieve city information
    let locationApiResponse = fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=5TdNcG6ZLvSwSwmGUIFTnlWfUSdQyh8X&q=${city}`)
    locationApiResponse.then((data) => {
      data.json().then((json) => {
        this.updateCurrentWeather(json[0].Key)
        this.setState({
          location: json[0].LocalizedName,
          locationKey: json[0].Key
        })
      }).catch((err) => {
        console.log(err)
        alert(`Sorry, we couldn't find any information for: ${input}.`)
      })
    })
  }

  updateCurrentWeather(locationKey) {
    let currentWeatherApiResponse = fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=5TdNcG6ZLvSwSwmGUIFTnlWfUSdQyh8X`)
    currentWeatherApiResponse.then((data) => {
      data.json().then((json) => {
        console.log("current weather", json)
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <Search updatelocation={this.updateLocation}/>
        <Location appInformation={this.state}/>
        {/* <Forecast /> */}
      </div>
    )
  }
}

export default App