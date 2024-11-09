import React from 'react'
import { GiSoundWaves } from "react-icons/gi";
import "../Styles/Header.css"
function LeftBar({ button, profile }) {
  return (
    <div className="left-bar">
      <div className="left-header">
        <GiSoundWaves size={"50px"} color={"#FFFFFFEB"} />
        <h2 className="synctify-logo">Synctify</h2>
      </div>

      <nav className="left-nav">
        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Create Playlist</li>
          <li>Follow Friend</li>
        </ul>
      </nav>
    </div>
  );
}

export default LeftBar