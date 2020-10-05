import React from "react";
import "./Player.css";
import PlayerSidebar from "../components/PlayerSidebar";
import PlayerBody from "../components/PlayerBody";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <PlayerSidebar />
        <PlayerBody />
      </div>
      {/* Footer */}
    </div>
  );
}

export default Player;
