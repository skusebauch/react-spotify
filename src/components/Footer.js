import React from "react";
import "./Footer.css";

import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipPreviousOutlinedIcon from "@material-ui/icons/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@material-ui/icons/SkipNextOutlined";
import ShuffleOutlinedIcon from "@material-ui/icons/ShuffleOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
// slider
import { Slider, Grid } from "@material-ui/core/";
import VolumeDown from "@material-ui/icons/VolumeDown";
import PlaylistPlayOutlinedIcon from "@material-ui/icons/PlaylistPlayOutlined";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/b/b4/Metallica_-_Load_cover.jpg"
          alt="cover"
          className="footer__albumLogo"
        />
        <div className="footer__songInfo">
          <h4>No song is playing</h4>
          <p>Hello this is just test</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleOutlinedIcon className="footer__green" />
        <SkipPreviousOutlinedIcon className="footer__icon" />
        <PlayCircleOutlineOutlinedIcon
          fontSize="large"
          className="footer__icon"
        />
        <SkipNextOutlinedIcon className="footer__icon" />
        <RepeatOutlinedIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayOutlinedIcon className="footer__volume" />
          </Grid>
          <Grid item>
            <VolumeDown className="footer__volume" />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
