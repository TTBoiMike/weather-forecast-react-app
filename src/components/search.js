import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ""
        }
    }

    handleChange(input) {
        this.setState({
            userInput: input
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatelocation(this.state.userInput)
    }

    render() {
        return (
            <form onSubmit={(e) => {this.handleSubmit(e)}} onChange={(e) => {this.handleChange(e.currentTarget.location.value)}}>
                <input type="text" name="location" id="location" placeholder="Enter a city"/>
                <button type="submit">Get forecast</button>
            </form>
        )
    }
}

export default Search