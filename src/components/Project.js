import React from "react";
import "./../style/Project.css";
import apple from "./../images/apple.png";

export default function Project(props) {
  return (
    <div className="project-container">
      <a href={props.link}>
        <img className="project-image" src={props.img}></img>
      </a>
      <div>
        <p className="project-title">{props.title}</p>
        <p>{props.description}</p>
        <a href={props.link}>{props.linkdesc}</a>
        <ul>
          {props.notes.map((val, i) => {
            return <li>{val}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
