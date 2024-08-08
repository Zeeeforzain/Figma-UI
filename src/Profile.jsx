import React from "react";
import "./Profile.css";
import Sidebar from "./Components/Sidebar";
import Head from "./Components/Head";
import ProfileMenu from "./Components/ProfileMenu";
import Footer from "./Components/Footer";
import ProfileBox from "./Components/ProfileBox";
import SettingBox from "./Components/SettingBox";
import Button from "./Components/Button";
import ProfileInfo from "./Components/ProfileInfo";
import Conversation from "./Components/Conversation";
import ProjectBox from "./Components/ProjectBox";
function Profile(props) {
  return (
    <>
      <div className="profilepage">
        <Sidebar />
        <div className="profileData">
          <Head
            prof="Images/signinwhite.png"
            setting="Images/settingwhite.png"
            notification="Images/notificationwhite.png"
          />
          <ProfileMenu
            img="Images/Prof1.png"
            name="Milli"
            email="Milli@gmail.com"
          />
          <div className="boxex">
            <ProfileBox boxname="Platform Settings">
              <SettingBox title="Account">
                <Button btntext="Email me when someone follows me" />
                <Button btntext="Email me when someone answers on my post" />
                <Button btntext="Email me when someone mentions me" />
              </SettingBox>
              <SettingBox title="Application">
                <Button btntext="New launches and projects" />
                <Button btntext="Monthly product updates" />
                <Button btntext="Subscribe to newsletter" />
              </SettingBox>
            </ProfileBox>
            <ProfileBox boxname="Profile Information">
              <ProfileInfo
                about="Hi, I’m Alec Thompson, Decisions:If you can’t decide, the answer is no.If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equalit)"
                profname="Milli Milli"
                mobile="030000000"
                email="milli@gmail.com"
                proflocation="Islamabad"
              />
            </ProfileBox>
            <ProfileBox boxname="Conversations">
              <Conversation
                image="Images/prof2.png"
                name="John"
                msg="Hi! I need more imformation...."
              />
              <Conversation
                image="Images/prof3.png"
                name="Esthra Jackeson"
                msg="Hi! Good Morning, Hope...."
              />
              <Conversation
                image="Images/prof4.png"
                name="William Swift"
                msg="Amazing worl! Best of..."
              />
              <Conversation
                image="Images/prof5.png"
                name="Robin Suchi"
                msg="Hi! I need Help in...."
              />
            </ProfileBox>
          </div>
          <ProjectBox title="Projects" subtitle="Architects design houses"/>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Profile;
