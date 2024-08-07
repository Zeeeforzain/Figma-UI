import React from "react";
import Footer from "./Components/Footer";
import "./Table.css";
import Head from "./Components/Head";
import Collection from "./Components/Collection";
import Sidebar from "./Components/Sidebar";
function Table() {
  return (
    <>
      <div className="tablepage">
        <Sidebar/>
        <div className="data">
          <Head prof="Images/prof.png" setting="Images/Setting.png" notification="Images/notification.png"/>
          <div className="collec">
            <Collection
             author="Author Table"
              col1="Author"
              col2="Function"
              col3="Status"
              col4="Employed"
              col5="Action"
              img="Images/prof1.png"
              name="Milli"
              email="millli@gmail.com"
              designation="Manager"
              organization="Organization"
              status="Online"
              date="12/3/12"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Table;
