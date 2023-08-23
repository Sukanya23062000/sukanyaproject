import React from "react";
class Uncontrolledform extends React.Component
{
    render()
    {
        return(
            <form>
                <h1>Uncontrolled form example</h1>
                <label>
                    Username :
                    <input type="text" />
                </label>
                <input type="submit" value="submit" />
            </form>   
        )
    }
}
export default Uncontrolledform;