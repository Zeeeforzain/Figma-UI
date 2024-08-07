import React from 'react';
import './Profile.css'
import Sidebar from './Components/Sidebar'
import Head from './Components/Head';
import ProfileMenu from './Components/ProfileMenu';
import Footer from './Components/Footer'
 function Profile(props) {
  return (
    <>
      <div className='profilepage'>
        <Sidebar/>
        <div className='profileData'>
            <Head prof= "Images/signinwhite.png" setting="Images/settingwhite.png" notification="Images/notificationwhite.png"/>
            <ProfileMenu img="Images/Prof1.png" name="Milli" email="Milli@gmail.com"/>
        </div>
      </div>
        <Footer/>
    </>
  );
}
export default Profile;