import React from 'react';
import "./Topbar.css";
import { Search,Person, Chat, Notifications } from "@material-ui/icons";

function Topbar(props) {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Social App</span>
            </div>
            <div className="topbarCenter"></div>
                <div className="searchbar">
                    <Search />
                    <input placeholder="Search for friend, post or video" className="searchInput"/>
                </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">HomePage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImage"/>
            </div>
        </div>
    );
}

export default Topbar;