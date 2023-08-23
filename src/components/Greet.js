import React from "react";
class Greet extends React.Component{
    render(){
        return(
            <div>
                <p>Hello Everyone, {this.props.wish}, How are you all, {this.props.matter}</p>
                <p>Hello Shrabani, {this.props.matter}</p>
            </div>
        )
    }
}
export default Greet;