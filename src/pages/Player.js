import React from "react";
import "./Player.css";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import Footer from "../components/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
