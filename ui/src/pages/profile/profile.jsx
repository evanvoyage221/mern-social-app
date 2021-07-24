import React from 'react';
import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";

function Profile(props) {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                        <img src="assets/post/3.jpeg" alt="" className="profileCoverImg"/>
                        <img src="assets/person/3.jpeg" alt="" className="profileUserImg"/>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Edward</h4>
                            <span className="profileInfoDesc">desc</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;