import React from 'react'

class Location extends React.Component {

    render() {
        return (
            <div>
                <p>Location: {this.props.appInformation.location}</p>
                <p>Key: {this.props.appInformation.locationKey}</p>
                <div>
                    <h3>
                        Current Weather
                    </h3>
                    <p>Temperature: </p>
                    <p>Summary: </p>
                </div>
            </div>
        )
    }
}

export default Location