export class ApiClient {

    // error handling
    status(response) {
        if(response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    getLocation(input, areaCode) {
        let city = input.toLowerCase();
        return this.getRequest(`https://api.openweathermap.org/data/2.5/weather?q=${city},${areaCode}&appid=02ef4d3d345333c1a5f6f1a75f10207c&units=metric`)
    }

    getForecast(long, lat) {
        console.log("fetch forecast")
        return this.getRequest(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,alerts,hourly&appid=02ef4d3d345333c1a5f6f1a75f10207c&units=metric`)
    }

    getRequest(apiURL) {
        return fetch(apiURL)
        .then(this.status)
        .catch(err => {
            console.log(err)
            alert(`Sorry, we couldn't find forecast information.`)
        })
    }
}