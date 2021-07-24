import React from 'react';
import "./friend.css"

function Friend({friend}) {
    return (
        <li className="sidebarFriends">
            <img alt="" src={friend.profilePicture} className="sidebarFriendImg"/>
            <span className="sidebarFriendName">{friend.username}</span>
        </li>
    );
}

export default Friend;