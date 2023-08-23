import React from "react";
import bellicon from './bellicon.png';
import bellfill from './bellfill.png';

class NewComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {message : "Please Subscribe", btnvalue : "Subscribe", image : bellicon}
    }
    styles = {color : "red"}
    buttonchange = ()=>
    {
        this.setState(
            {
                message : "Thank you for the subscription",
                btnvalue : "subscribed"
            }
        )
    }
    imageChange=()=>
    {
        this.setState(
            {
                image: bellfill,
                message : "Thanks for your support and we will update our next video soon"
            }
        )
    }
    render()
    {
        return(
            <div className="myclass">
                <p style={this.styles}>{this.state.message}</p>
                <button onClick={this.buttonchange}>{this.state.btnvalue}</button>
                <img onClick={this.imageChange} style={{height: "50px", width: "50px"}} src={this.state.image} alt=""></img>
            </div>
        )
    }
}
export default NewComponent;