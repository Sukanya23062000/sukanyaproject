import React from 'react';
class Wish extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={name : "dinga", city : "Bangalore"}
    }
    render(){
    return(
        <div>
            <p>Hi {this.state.name}Good Morning my city is {this.state.city}</p>
        </div>
    )
}
}
export default Wish;
