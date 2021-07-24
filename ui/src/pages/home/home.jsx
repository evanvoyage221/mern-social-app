import React from 'react';
import "./home.css"
import Topbar from "../../components/topbar/Topbar.js";
import Sidebar from "../../components/sidebar/sidebar";
import Rightbar from "../../components/rightbar/rightbar";
import Feed from "../../components/feed/feed";


function Home() {
    return (
        <>
            <Topbar />
             <div className="homeContainer">
                 <Sidebar />
                 <Feed />
                 <Rightbar />
             </div>
        </>
    );
}

export default Home;