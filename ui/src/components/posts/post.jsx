import React, {useState} from 'react';
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import {Users} from "../../dummyData";

function Post({post}) {
    // const user = Users.filter((u) => u.id === 1)
    // console.log(user[0])
    const [like, setLike] = useState(post.like)
    const [isliked, setisLiked] = useState(false)

    const likeHandler = () => {
        setLike(isliked ? like-1: like+1);
        setisLiked(!isliked);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" className="postProfileImg"/>
                        <span className="postUserName">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt=""/>
                        <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt=""/>
                        <span className="post">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;