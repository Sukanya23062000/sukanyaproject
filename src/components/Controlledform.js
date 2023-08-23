import React from "react";
class Controlledform extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {value : ' '}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event)
    {
        alert("You have submitted successfully" +this.state.value)
        event.preventDefault();
    }
    handleChange(event)
    {
        this.setState({value : event.target.value})
    }
    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>controlled form example</h1>
                <label>
                    Username :
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="submit" />
            </form>   
        )
    }
}
export default Controlledform;