import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    ExplorEasyDesc:
      "Our motivation for this project was to allow users to easily plan a day out based on location and weather. This solved the problem of using multiple apps to plan a day or evening out.",
    ExplorEasyGithub: "https://github.com/venkatdangeti/ExplorEasy",
    ExplorEasyWebsite: "https://venkatdangeti.github.io/ExplorEasy/",

    WeatherDashbooardDesc:
      "A website that sbuild a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
    WeatherDashbooardGithub:
      "https://github.com/venkatdangeti/Weather-Dashboard",
    RWeatherDashbooardWebsite:
      "https://venkatdangeti.github.io/Weather-Dashboard/",

    TeamProfileGeneratorDesc:
      "This application will take in information about employees on a software engineering team, then generate an HTML webpage that displays summaries for each person.",
    TeamProfileGeneratorGithub:
      " https://github.com/venkatdangeti/Team-Profile-Generator.git",
    TeamProfileGeneratorWebsite: " ",

    WorkDaySchedulerDesc:
      "This application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS.",
    WorkDaySchedulerGithub:
      "https://github.com/venkatdangeti/Work-Day-Scheduler.git",
    WorkDaySchedulerWebsite:
      " https://venkatdangeti.github.io/Work-Day-Scheduler/",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
          rel="noreferrer"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a
          href={desc[projectName + "Website"]}
          target="_blank"
          rel="noreferrer"
        >
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
