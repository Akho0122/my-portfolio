import React from 'react';
import './ContactMe.css';
import imgBack from '../../../src/images/mailz.jpeg';
import load1 from '../../../src/images/load2.gif';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import Typical from 'react-typical';

const ContactMe = (props) => {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return (
        <div className="main-container" id={props.id || ""}>
            <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"}/>
            <div className="central-form">
                <div className="col">
                <h2 className="title">
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Get In Touch 📧",
                    1000,
                  ]}
                />
              </h2>
              <a href="https://www.instagram.com/akhrorbek.azamjonovich/">
                <i className={"fa fa-instagram"}></i>
              </a>
              <a href="https://t.me/Akhrorbek0122">
                <i className={"fa fa-telegram"}></i>
              </a>
              <a href="https://github.com/Akho0122?tab=overview&from=2022-01-01&to=2022-01-02">
                <i className={"fa fa-github-square"}></i>
              </a>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;