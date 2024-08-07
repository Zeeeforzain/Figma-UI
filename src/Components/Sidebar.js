import React from "react";
import "./Sidebar.css";
import Name from "./Name";
import List from "./List";
import Help from "./Help";
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Name />
        <List />
        <Help />
      </div>
    </>
  );
}
export default Sidebar;
