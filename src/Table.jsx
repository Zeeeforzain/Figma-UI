import React from "react";
import Name from "./Components/Name";
import Footer from "./Components/Footer";
import List from "./Components/List";
import Help from "./Components/Help";
import "./Table.css";
import Head from "./Components/Head";
import Collection from "./Components/Collection";
function Table() {
  return (
    <>
      <div className="tablepage">
        <div className="sidebar">
          <Name />
          <List />
          <Help />
        </div>
        <div className="data">
          <Head />
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
            <Collection
              author="Projects"
              col1="Companies"
              col2="Budget"
              col3="Status"
              col4="Completion"
              col5="Action"
              img="Images/jira-3 1.png"
              name="Add new pricing page"
              designation="$400"
              
              status="Working"
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
