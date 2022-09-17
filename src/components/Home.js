import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import "./../style/Home.css";
import Project from "./Project";
import apple from "./../images/apple.png";
import brs from "./../images/brs.png";
import foodrunners from "./../images/foodrunners.png";
import aapi from "./../images/aapi.png";
import monnoms from "./../images/monnoms.png";
import headhunter from "./../images/headhunter.png";
import mypantry from "./../images/mypantry.png";
import mypantry1 from "./../images/mypantry1.png";
import contacto from "./../images/contacto.png";
import gratitude from "./../images/gratitude.png";
import collectively from "./../images/collectively.png";
import sluglink from "./../images/sluglink.png";
import relate from "./../images/relate.png";

import priorly from "./../images/priorly.jpg";
import monnom1 from "./../images/monnom1.gif";
import monnom2 from "./../images/monnom2.gif";
import { useState } from "react";

export default function Home() {
  const [projectList, setProjectList] = useState([
    {
      title: "MyPantry 🍎",
      img: mypantry,
      description:
        "A web application that helps to connect food insecure people with no cost food resources near them. ",
      link: "https://github.com/Jekuang3/MyPantry",
      linkdesc: "Check out the code here :)",
      notes: [
        "Google Maps API for displaying pantry locations.",
        "React.js and MaterialUI to render the UI components.",
        "Store data in MongoDB with a Node.js/Express server.",
      ],
    },
    {
      title: "HeadHunter 📝",
      img: headhunter,
      description:
        "A resume parser that allows employers to search job applicants based on keywords in their resumes.",
      link: "https://github.com/Jekuang3/Headhunter",
      linkdesc: "Check out the code here :)",
      notes: [
        "React.js and TailWind to render the UI components.",
        "Firebase for user authentication.",
        "Use MongoDB to store resume data.",
      ],
    },
    {
      title: "AAPI Talk 🗣",
      img: aapi,
      description:
        "A web application for users to share news and events regarding the Asian American community.",
      link: "https://aapi-talk.kathleenzz.repl.co/index.html",
      linkdesc: "Check out the application :)",
      notes: [
        "Group project submission for Creatica 2021 hackathon.",
        "Use HTML, CSS, and Javascript for front-end.",
        "Use News API to fetch recent events data regarding the AAPI community.",
      ],
    },
    {
      title: "Contacto 📞",
      img: contacto,
      description:
        "A group contact management platform with in-app messaging, emailing, and SMS messaging capabilities.",
      link: "https://github.com/MohitAgrawal404/PlivoMock",
      linkdesc: "Check out the code here. :)",
      notes: [
        "Twilio API for SMS messaging.",
        "Firebase for user authentication and to store data.",
        "React.js for rendering the UI components.",
      ],
    },
    {
      title: "Food Runners 🥔",
      img: foodrunners,
      description: "A platform for users to share about recent food donations.",
      link: "https://github.com/Jekuang3/BRS-jobboard",
      linkdesc: "Check out the code here. :)",
      notes: [
        "HTML, CSS, and JavaScript for the front-end.",
        "Google Maps API to render the map and send location data.",
        "Project submission to Envirothon 2021 hackathon.",
      ],
    },
    {
      title: "Black Remote She Job Board 👩🏻‍💻",
      img: brs,
      description: "A job board aimed for underrespresented candidates.",
      link: "https://github.com/Jekuang3/BRS-jobboard",
      linkdesc: "Check out the code here. :)",
      notes: [
        "HTML, CSS, and JavaScript for the front-end.",
        "Project winner submission for ElevateHacks 2021.",
      ],
    },

    {
      title: "Tech4Good Lab: Gratitude - Create Deck Page ☺️",
      img: gratitude,
      description: "A platform for users to send collective thank you cards.",
      link: "",
      linkdesc: "This is a private project.",
      notes: [
        "Angular, TypeScript, HTML, and Sass for the front-end.",
        "Fetch data from Firebase and manage frontend state using the NgRX library.",
        "This project is a part of the Tech4Good Lab at UC Santa Cruz. I worked on leading the front-end team in implementing the UI components for this specific page in the app.",
      ],
    },

    {
      title: "Tech4Good Lab: Collectively - Admin Dashboard Page 🧠",
      img: collectively,
      description: "A web app aimed at microlearning through small groups.",
      link: "",
      linkdesc: "This is a private project.",
      notes: [
        "Angular, TypeScript, HTML, and Sass for the front-end.",
        "Fetch data from Firebase and manage frontend state using the NgRX library.",
        "This project is a part of the Tech4Good Lab at UC Santa Cruz. I worked with a team on fetching and processing the data for this specific page in the app.",
      ],
    },
    {
      title: "Tech4Good Lab: Relate - Dashboard Page 👫👫",
      img: relate,
      description:
        "An app containing short activities for team/group community building",
      link: "",
      linkdesc: "This is a private project.",
      notes: [
        "Angular, TypeScript, HTML, and Sass for the front-end.",
        "Fetch data from Firebase and manage frontend state using the NgRX library.",
        "This project is a part of the Tech4Good Lab at UC Santa Cruz. I worked with a team on fetching and processing the data for this specific page in the app.",
      ],
    },
  ]);

  return (
    <div>
      <Navbar />
      <div className="intro-container">
        <About />
        <img
          className="headshot"
          src={require("./../images/headshot.png")}
        ></img>
      </div>
      <div className="projects-title">
        <h3>Projects</h3>
      </div>
      <div className="mon-container">
        <div className="mon-project-container">
          <a href="https://github.com/Jekuang3/MonNom">
            <img className="mon-project-image" src={monnom1}></img>
          </a>
          <a href="https://github.com/Jekuang3/MonNom">
            <img className="mon-project-image" src={monnom2}></img>
          </a>
          <div className="project-text">
            <p className="project-title">MonNom 🍱</p>
            <p>
              A mobile app for users to search for restaurants that accomodates
              their allergies and food restrictions.{" "}
            </p>
            <a href="https://github.com/Jekuang3/MonNom">
              Check out the code here :)
            </a>
            <ul>
              <li>Set up communication for requests to/from the API.</li>
              <li>Work with UX to iterate and establish design of the MVP.</li>
              <li>Implement design using React Native.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mon-container">
        <div className="mon-project-container">
          {/* <a href={props.link}> */}
          <img className="priorly-project-image" src={priorly}></img>

          {/* </a> */}
          <div className="project-text">
            <p className="project-title">Priorly 🕐</p>
            <p>
              A time capture system for employeers to track digital habits and
              workloads of employees to optimize productivity.
            </p>
            <a href="">This is a private project.</a>
            <ul>
              <li>Utilize the AWS Amplify framework and hosted on there.</li>
              <li>
                Collect data from various third party APIs such as Gmail API and
                Zoom API.
              </li>
              <li>Use React.js and MaterialUI to render the UI components.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="projects-div">
        {projectList.map((val, i) => {
          return (
            <Project
              title={val.title}
              img={val.img}
              description={val.description}
              link={val.link}
              linkdesc={val.linkdesc}
              notes={val.notes}
            />
          );
        })}
      </div>
    </div>
  );
}
