import React from 'react';
import './ProfileMenu.css'
 function ProfileMenu(props) {
  return (
    <div>
      <div className='profMenu'>
                <div className='intro'>
                    <img src={props.img} alt="" />
                    <div className='nme'><h3>{props.name}</h3><h5>{props.email}</h5></div>
                </div>
                <div className='profItem'>
                    <ul>
                        <li><img src="Images/Overview.png" alt="" /><h5>OVERVIEW</h5></li>
                        <li><img src="Images/teams.png" alt="" /><h5>TEAMS</h5></li>
                        <li><img src="Images/projects.png" alt="" /><h5>PROJECTS</h5></li>
                    </ul>
                </div>
            </div>
    </div>
  );
}
export default ProfileMenu;