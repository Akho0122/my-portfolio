import {React, useState} from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './Resume.css';
const Resume = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return(
            <div className="resume-heading">
            <div className="resume-main-heading">
              <div className="heading-bullet"></div>
              <span>{props.heading ? props.heading : ""}</span>
              {props.fromDate && props.toDate ? (
                <div className="heading-date">
                  {props.fromDate + "-" + props.toDate}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="resume-sub-heading">
              <span>{props.subHeading ? props.subHeading : ""}</span>
            </div>
            <div className="resume-heading-description">
              <span>{props.description ? props.description : ""}</span>
            </div>
          </div>
        )
    };

    const programmingSkillsDetails = [
        {skills: "Javascript", ratingPercentage: 55},
        {skills: "React JS", ratingPercentage: 75},
        {skills: "React Native", ratingPercentage: 55},
        {skills: "HTML5", ratingPercentage: 90},
        {skills: "CSS", ratingPercentage: 90},
        {skills: "Bootstrap", ratingPercentage: 70},
        {skills: "Sass", ratingPercentage: 65},
        {skills: "Git/Github", ratingPercentage: 75},
        {skills: "JQuery", ratingPercentage: 70},
    ];

    const projectDetails = [
        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "2021", toDate: "2022"},
            description: "A Personal Portfolio Website to showcase all my details and projects at one place",
            subHeading: "Technologies Used: React JS, Bootstrap",
        },
        {
            title: "Mobile E-shop",
            duration: {fromDate: "2022", toDate: "2022"},
            description: "A Complete Shopping Website to show what I Learned so far",
            subHeading: "Technologies Used: React JS",
        },
        {
            title: "A complete React.Js Project",
            duration: {fromDate: "2021", toDate: "2021"},
            description: "A complete React.Js Project",
            subHeading: "Technologies Used: React JS",
        },
    ]

    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"},
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
            heading={"PDP IT Academy"}
            subHeading={"Frontend Development"}
            fromDate={"2019"}
            toDate={"2020"}
            />
            <ResumeHeading
            heading={"Language Apex"}
            subHeading={"English"}
            fromDate={"2017"}
            toDate={"2020"}
            />
            <ResumeHeading
            heading={"High School"}
            subHeading={"Russian School &14"}
            fromDate={"2009"}
            toDate={"2020"}
            />
        </div>,
        <div className="resume-screen-container" key="work-experience">
            <ResumeHeading
            heading={"Borbaraka"}
            subHeading={"Full Stack Developer"}
            fromDate={"2022"}
            toDate={"present"}
            />
            <div className="experience-description">
                <span className="experience-description-text">
                    Currently working on project called Borbaraka as frontend developer.
                </span>
            </div>
            <div className="experience-description">
                <span className="resume-description-text">
                    - Developed an ecommerce website for client with
                    the dashboard for managing the products, managing reviews, users, payment etc...
                </span>
                <br/>
                <span className="resume-description-text">
                    - Integrated the web app with backend services to 
                    create new user onboarding application with dynamic form content.
                </span>
                <br />
                <span className="resume-description-text">
                    - I stretch my mental capacity to develope UI as per the given designs.
                </span>
                <br />
                </div>
            </div>,
            <div className="resume-screen-container programming-skills-container" key={"programming-skills"}>
                 {programmingSkillsDetails.map((skill, index) =>(
                     <div className="skill-parent" key={index}>
                         <div className="heading-bullet">

                         </div>
                         <span>{skill.skills}</span>
                         <div className="skill-percentage">
                             <div style={{width: skill.ratingPercentage + "%"}}
                             className="active-percentage-bar">
                                 
                             </div>
                         </div>
                     </div>
                 ))}
            </div>,
            <div className="resume-screen-container" key="projects">
                {projectDetails.map((projectDetails, index) =>(
                    <ResumeHeading 
                    key={index}
                    heading={projectDetails.title}
                    subHeading={projectDetails.subHeading}
                    description={projectDetails.description}
                    fromDate={projectDetails.duration.fromDate}
                    toDate={projectDetails.duration.toDate}
                    />
                ))}
            </div>,
            <div className="resume-screen-container" key="interests">
                <ResumeHeading
                heading="Teaching"
                description="Apart from being a tech enthusiast and a code writer, I also love teach people what I know simply because I believe in sharing"
                />
                <ResumeHeading
                heading="Music"
                description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
                />
                <ResumeHeading
                heading="Competitive Gaming"
                description="I like to challenge my reflexes a lot while competing in basketball games, pushing the rank and having interactive gaming sessions excites me the most."
                />
            </div>
    ];

    const handleCarousal = (index) =>{
        let offsetHeight = 360;
        let newCarousalOffset ={
            style: {transform: "translateY(" + index * offsetHeight * -1 + "px)"}
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets =()=>{
        return resumeBullets.map((bullet, index) =>(
            <div 
            onClick={()=> handleCarousal(index)}
            className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            key={index}
            >
                <img className="bullet-logo" 
                src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                alt="B" />
                 <span className="bullet-label">{bullet.label}</span>
            </div>
        ))
    }
    const getResumeScreens =()=>{
        return(
            <div 
            style={carousalOffSetStyle.style}
             className="resume-details-carousal"
             >
                 {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    return (
        <div className="resume-container screen-container" id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"}/>
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">
                                {getBullets()}
                            </div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    );
};

export default Resume;