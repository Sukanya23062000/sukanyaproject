import React from "react";
import "./Home.css";
import Topbar from "./topbar/Topbar";
import Leftbar from "./leftbar/Leftbar";
import Centerbar from "./centerbar/Centerbar";
import Rightbar from "./rightbar/Rightbar";

class Home extends React.Component
{
    render()
    {
        return(
            <div><Topbar />
                <div className="homeContainer">
                    <Leftbar />
                    <Centerbar />
                    <Rightbar />
                </div>
            </div>
        )
    }
}
export default Home;