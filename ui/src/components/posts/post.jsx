import React from 'react';
import "./post.css";
import { MoreVert } from "@material-ui/icons";

function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/edward.jpg" alt="" className="postProfileImg"/>
                        <span className="postUserName">Edward Elric</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey it's Edward!</span>
                    <img className="postImg" src="assets/post/1.jpeg" alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/heart.png" alt=""/>
                        <img className="likeIcon" src="assets/like.png" alt=""/>
                        <span className="post">32 people liked it</span>likeCounter
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;