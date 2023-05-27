import React from 'react'
import playStore from "../Images/playstore.png";
import appStore from "../Images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
      <div className="leftFooter">
        <p>Available On Android and IOS </p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Indigenous Business Promotion</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; IBP</p>
      </div>

      <div className="rightFooter">
        <h4>Contact Us</h4>
        <a href="https://wa.me/+923166719920">whatsaap</a>
        <a>LinkedIn</a>
        <a >Facebook</a>
      </div>
    </footer>
    </div>
  )
}

export default Footer