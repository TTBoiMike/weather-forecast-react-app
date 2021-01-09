import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            areaCode: ""
        }
    }

    handleChange(input) {
        this.setState({
            city: input.currentTarget.city.value,
            areaCode: input.currentTarget.area.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatelocation(this.state.city, this.state.areaCode);
        e.currentTarget.city.value = "";
        e.currentTarget.area.value = "GB"
    }

    render() {
        return (
            <form onSubmit={(e) => {this.handleSubmit(e)}} onChange={(e) => {this.handleChange(e)}}>
                <h1>UK Weather App</h1>
                <div>
                <input type="text" name="city" id="city" placeholder="Enter a city"/>
                <select name="area" id="area">
                    <option value="GB">GB</option>
                    <option value="IE">Ireland</option> 
                </select>
                </div>
            </form>
        )
    }
}

export default Search