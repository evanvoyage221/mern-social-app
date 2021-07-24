import React from 'react';
import "./share.css";
import { PermMedia } from "@material-ui/icons"

function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" className="shareProfileImg"/>
                    <input
                        placeholder="what's in your mind?"
                        className="shareIput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Share;