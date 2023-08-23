import "./post.css";
import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { Users } from "../../data";

export default function Post({post})
{
    const user = Users.filter(u => u.id === 1)
    console.log(user[0].username)

    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <FiMoreVertical />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />

                </div>
                <div className="postBottom">
                    <div className="postButtonLeft">
                        <img src="like1.png" alt="" className="Icon" />
                        <img src="heart1.png" alt="" className="Icon" />
                        <span className="postlikeCounter">{post.like} people like it</span>
                    </div>
                    <div className="postButtonRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}