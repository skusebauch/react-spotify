import React from "react";
import "./Sidebar.css";
import Logo from "../assets/Logo/logo.png";
import SidebarOption from "./SidebarOption";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={Logo} alt="Logo" className="sidebar__logo" />
      <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
      <SidebarOption title="Search" Icon={SearchOutlinedIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon} />
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />
      <SidebarOption title="Rock" />
      <SidebarOption title="Hip Hop" />
      <SidebarOption title="Country" />
    </div>
  );
}

export default Sidebar;
