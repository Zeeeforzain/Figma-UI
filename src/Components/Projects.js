import React from 'react';
import './Projects.css'; 
export default function Projects(props) {
  return (
    <div className='project'>
      <img src={props.img} alt=""/>
      <h5>{props.projectNo}</h5>
      <h2>{props.projectTitle}</h2>
      <h4>{props.projectDescripton}</h4>
      <div className="viewAll">
        <button className='projectBtn'>VIEW ALL</button>
        <img src="Images/group.png" alt="" />
      </div>
    </div>
  );
}
