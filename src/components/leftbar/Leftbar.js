import "./Leftbar.css"
import { MdBookmarks, MdGroups2, MdOutlineChat, MdOutlineEvent, MdOutlineVideoSettings, MdRssFeed, MdWorkOutline } from "react-icons/md";
import { BsQuestionSquare } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

function Leftbar()
{
    return(
        <div className="leftbar">
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItems">
                       < MdRssFeed className="LeftbarIcon" />
                       <span className="leftbarListItemText">Feed</span> 
                    </li>
                    <li className="leftbarListItems">
                       < MdOutlineChat className="LeftbarIcon" />
                       <span className="leftbarListItemText">Chat</span> 
                    </li>
                    <li className="leftbarListItems">
                       < MdOutlineVideoSettings className="LeftbarIcon" />
                       <span className="leftbarListItemText">Videos</span> 
                    </li>
                    <li className="leftbarListItems">
                       < MdGroups2 className="LeftbarIcon" />
                       <span className="leftbarListItemText">Groups</span> 
                    </li>
                    <li className="leftbarListItems">
                       < MdBookmarks className="LeftbarIcon" />
                       <span className="leftbarListItemText">Bookmarks</span> 
                    </li>
                    <li className="leftbarListItems">
                       < BsQuestionSquare className="LeftbarIcon" />
                       <span className="leftbarListItemText">Questions</span> 
                    </li>
                    <li className="leftbarListItems">
                       < MdWorkOutline className="LeftbarIcon" />
                       <span className="leftbarListItemText">Jobs</span> 
                    </li>
                    <li className="leftbarListItems">
                       < MdOutlineEvent className="LeftbarIcon" />
                       <span className="leftbarListItemText">Event</span> 
                    </li>
                    <li className="leftbarListItems">
                       < FaGraduationCap className="LeftbarIcon" />
                       <span className="leftbarListItemText">Courses</span> 
                    </li>
                </ul>
                <button className="leftbarButton">Show More</button>
                <hr className="leftbarhr"/>
                <ul className="leftbarFriendList">
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="alia.jpeg" alt="Alia Bhatt" />
                        <span className="leftbarFriendName">Alia Bhatt</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="dhoni.jpeg" alt="M.S.Dhoni" />
                        <span className="leftbarFriendName">M.S.Dhoni</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="deepika.jpeg" alt="Deepika Padukon" />
                        <span className="leftbarFriendName">Deepika Padukon</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="madhuri.jpeg" alt="Madhuri Dixit" />
                        <span className="leftbarFriendName">Madhuri Dixit</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="sridevi.jpeg" alt="sridevi" />
                        <span className="leftbarFriendName">Sridevi</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="sridevi.jpeg" alt="sridevi" />
                        <span className="leftbarFriendName">Sridevi</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="sridevi.jpeg" alt="sridevi" />
                        <span className="leftbarFriendName">Sridevi</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Leftbar;