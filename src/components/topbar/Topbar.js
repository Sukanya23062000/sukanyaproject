import React from "react";
import "./Topbar.css";
import { BsFillPersonFill, BsFillBellFill, BsFillChatSquareTextFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

class Topbar extends React.Component
{
    render()
    {
        return(
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <span className="logo">FaceBook</span>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        <CiSearch className="searchIcon" />
                        <input className="searchInput" placeholder="Search for Friends, post or video"/>
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarlink">Homepage</span>
                        <span className="topbarlink">Timeline</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <BsFillPersonFill />
                            <span className="topbarIconBadge">6</span>
                        </div>
                        <div className="topbarIconItem">
                            <BsFillBellFill />
                            <span className="topbarIconBadge">28</span>
                        </div>
                        <div className="topbarIconItem">
                            <BsFillChatSquareTextFill />
                            <span className="topbarIconBadge">58</span>
                        </div>
                    </div>
                    <img src="My_Image.jpg" alt="myimage" className="topbarImg" />
                </div>
            </div>
        )
    }
}
export default Topbar;