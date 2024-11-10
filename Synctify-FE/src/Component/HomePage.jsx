import React from 'react'
import LeftBar from './LeftBar'
import "../Styles/Home.css"

function HomePage() {
  return (
      <>
      <LeftBar />
      <div className="main-content">
        <div className="header">
            <div className="left">
                <p>button</p>
                <p>button</p>
            </div>

            <div className="right">

            </div>

        </div>

        {/** content for page goes here */}
      </div>
    </>

  );
}

export default HomePage