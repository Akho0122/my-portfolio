import {React, useState} from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';

const Resume = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    const ReusableHeading = (props) => {
        <div className="resume-heading">
            <div className="resume-main-heading">
                <div className="heading-bullet">
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "_" + props.toDate}
                        </div>
                    ): (<div></div>)}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        </div>
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

    const ResumeBullets = [
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
            </div>
        </div>
    ];

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return (
        <div className="resume-container screen-container" id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"}/>
            </div>
        </div>
    );
};

export default Resume;