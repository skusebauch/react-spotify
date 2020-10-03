import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./pages/Player";
import { useStateValue } from "./store/StateProvider";
import * as actionTypes from "./store/reducer/actionTypes";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  //grab something from the datalayer
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    //console.log("I have a token >>>", hash);
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      // give our token to spotify api to connect app - spotify
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: user,
        });
      });
    }
    console.log(user);
  }, [user]);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
