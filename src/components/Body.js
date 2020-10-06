import React from "react";
import { useStateValue } from "../store/StateProvider";
import "./Body.css";
import Header from "./Header";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="cover" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
