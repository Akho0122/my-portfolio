import React from "react";
import Typical from "react-typical";
import './Profile.css';
function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
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
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'M <span className="highlighted-text">Akhrorbek</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "React / React Native Dev",
                    1000,
                    "Good English/Russian Speaker",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with frontend and backend
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{""}
            </button>
            <a href="my resume.pdf" download={"Akhrorbek's resume.pdf"}>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
