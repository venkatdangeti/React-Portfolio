import React from "react";
import ProjectBox from "./ProjectBox";
import ExplorEasyImage from "../../images/ExplorEasy.png";
import WeatherDashbooardImage from "../../images/Weatherdashboard.png";
import TeamProfileImage from "../../images/TeamProfile.png";
import WorkDaySchedulerImage from "../../images/WorkdayScheduler.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={ExplorEasyImage} projectName="ExplorEasy" />
        <ProjectBox
          projectPhoto={WeatherDashbooardImage}
          projectName="WeatherDashbooard"
        />
        <ProjectBox
          projectPhoto={TeamProfileImage}
          projectName="TeamProfileGenerator"
        />
        <ProjectBox
          projectPhoto={WorkDaySchedulerImage}
          projectName="WorkDayScheduler"
        />
      </div>
    </div>
  );
};

export default Projects;
