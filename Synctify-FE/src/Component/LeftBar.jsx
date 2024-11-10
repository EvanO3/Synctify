import React from 'react'
import { GiSoundWaves } from "react-icons/gi";
import { RiPlayListAddLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { IoGridOutline } from "react-icons/io5";
import { SlUserFollow } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import "../Styles/Header.css"

function LeftBar({ button, profile }) {
  return (
    <div className="left-bar">
      <div className="left-header">
        <GiSoundWaves size={"50px"} color={"#FFFFFFEB"} />
        <h2 className="synctify-logo">Synctify</h2>
      </div>

      <nav className="left-nav">
        <div className="input-container">
          <CiSearch className="input-icon" colour={"White"} />
          <input className="Search-bar" type="text" placeholder="Search..." />
        </div>
        <ul>
          <li>
            <AiOutlineHome color={"White"} size={"18px"} />
            Home
          </li>
          <li>
            <IoGridOutline color={"White"} />
            New
          </li>
          <li>
            <RiPlayListAddLine color={"White"} />
            Create Playlist
          </li>
          <li>
            <SlUserFollow color={"White"} />
            Follow Friend
          </li>
        </ul>
      </nav>

      <footer className="left-footer">
        <p> &copy; 2024 Synctify</p>
      </footer>
    </div>
  );
}

export default LeftBar