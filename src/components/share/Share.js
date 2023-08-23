import "./Share.css";
import { MdLocationPin, MdOutlineEmojiEmotions, MdOutlinePermMedia } from "react-icons/md";
import { AiOutlineTags } from "react-icons/ai";

function Share()
{
    var style1 = {color : "blue"};
    var style2 = {color : "red"};
    var style3 = {color : "green"};
    var style4 = {color : "yellow"};

    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="madhuri.jpeg" alt="Madhuri Dixit" className="shareProfileImg"/>
                    <input placeholder="What's in your mind Sukanya ?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareButton1">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <MdOutlinePermMedia style = {style1} className="shareIcon" />
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <AiOutlineTags style = {style2} className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <MdLocationPin style = {style3} className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <MdOutlineEmojiEmotions style = {style4} className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
export default Share;