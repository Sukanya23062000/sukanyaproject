import "./Rightbar.css"
function Rightbar()
{
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="gift box.jpeg" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Alia Bhatt</b> and <b> 2 other Friends</b> have a birthday Today</span>
                </div>
                <img className="rightbarAd" src="advertise.jpeg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="friendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="alia.jpeg" alt="" className="rightbarprofileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Alia Bhatt</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="sridevi.jpeg" alt="" className="rightbarprofileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Sridevi</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="deepika.jpeg" alt="" className="rightbarprofileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Deepika Padukon</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="dhoni.jpeg" alt="" className="rightbarprofileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">M S Dhoni</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="madhuri4.jpeg" alt="" className="rightbarprofileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Twinkle Khanna</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Rightbar;