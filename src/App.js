import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./pages/Player";
import { useStateValue } from "./store/StateProvider";
import * as actionTypes from "./store/reducer/actionTypes";

const spotify = new SpotifyWebApi();

function App() {
  //grab something from the datalayer
  const [{ user, token, playlists }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    //console.log("I have a token >>>", hash);
    window.location.hash = "";
    const _token = hash.access_token;
    // push user to datalayer
    if (_token) {
      dispatch({
        type: actionTypes.SET_TOKEN,
        token: _token,
      });
      // give our token to spotify api to connect app - spotify
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: actionTypes.SET_PLAYLISTS,
          playlists: playlist,
        });
      });
      spotify.getPlaylist("37i9dQZEVXcMBUfMkdMYoB").then((response) => {
        dispatch({
          type: actionTypes.SET_DISCOVER_WEEKLY,
          discover_weekly: response,
        });
      });
    }
  }, [user, dispatch, token, playlists]);
  console.log(user);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
