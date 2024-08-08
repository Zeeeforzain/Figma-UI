import React from "react";
import "./ProjectBox.css";
import Projects from "./Projects";
export default function ProjectBox(props) {
  return (
    <div className="projectBox">
      <h4>{props.title}</h4>
      <h5>{props.subtitle}</h5>
      <div className="projects">
        <Projects
          img="Images/pic1.png"
          projectNo="Project #1"
          projectTitle="Modern"
          projectDescripton="As Uber works through a huge amount of internal management turmoil."
        />
        <Projects
          img="Images/pic2.png"
          projectNo="Project #2"
          projectTitle="Scandinavian"
          projectDescripton="Music is something that every personhas his or her own specific opinion about."
        />
        <Projects
          img="Images/pic3.png"
          projectNo="Project #3"
          projectTitle="Minimalist"
          projectDescripton="Different people have different taste , and various types of music."
        />
        <div className="create">
          <img src="Images/create.png" alt="" />
          <h3>Create a new project</h3>
        </div>
      </div>
    </div>
  );
}
