import React, { useState } from "react";
import "./ContactMe.css";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import Typical from "react-typical";
import axios from 'axios';
import {toast} from 'react-toastify';

const ContactMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

const handleName =(event) => {
      setName(event.target.value);
}
  
const handleEmail =(event) => {
    setEmail(event.target.value);
}

const handleMessage =(event) => {
    setMessage(event.target.value);
}

const submitForm = async(event) => {
    event.preventDefault();
    try{
        let data = {
            name,
            email,
            message,
        };
        setBool(true);
        const res = await axios.post(`./contact`, data);
        if(name.length === 0 || email.length === 0 || message.length === 0){
            setBanner(res.data.msg)
            toast.error(res.data.msg)
            setBool(false)
        } else if(res.status === 200){
            setBanner(res.data.msg)
            toast.success(res.data.msg)
            setBool(false)
        }
    } catch(error){

    }

}

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {""}
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
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
        <div className="back-form">
            <div className="img-back">
                <h4>Send Your Email Here!</h4>
                <img src={imgBack} alt="image not found" />
            </div>
            <form onSubmit={submitForm}>
                <p>{banner}</p>
                <label htmlFor="name">Name</label>
                <input type="text" onChange={handleName} value={name} />
                <label htmlFor="email">Email</label>
                <input type="email" onChange={handleEmail} value={email} />
                <label htmlFor="message">Message</label>
                <textarea type="text" onChange={handleMessage} value={message} />

                <div className="send-btn">
                    <button type="submit">
                        send  <i className="fa fa-paper-plane"/>
                        {bool ? (<b className="load">
                            <img src={load1} alt="image not found" />
                        </b>): ("")}
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
