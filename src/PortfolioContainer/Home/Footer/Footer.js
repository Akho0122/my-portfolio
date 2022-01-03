import React from 'react';
import './Footer.css';
import Bg from "../../../assets/Home/shape-bg.png"
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-parent">
                <img src={Bg}
             alt="no internet connection" />
            </div>
        </div>
    );
};

export default Footer;