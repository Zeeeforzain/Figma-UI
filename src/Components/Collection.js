import React from "react";
import "./Collection.css";
function Collection(props) {
  return (
    <>
      <div className="collection">
        <h1>{props.author}</h1>
        <table>
          <thead>
            <tr>
              <th className="Author">{props.col1}</th>
              <th>{props.col2}</th>
              <th>{props.col3}</th>
              <th>{props.col4}</th>
              <th>{props.col5}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="Author">
                <img src={props.img} alt="Author 1" />
                <div className="auth">
                  <h3>{props.name}</h3>
                  <h5>{props.email}</h5>
                </div>
              </td>
              <td className="function">
                <h3>{props.designation}</h3>
                <h5>{props.organization}</h5>
              </td>
              <td className="status"><div className="stat">{props.status}</div></td>
              <td className="date">{props.date}</td>
              <td className="action">Edit</td>
            </tr>
            </tbody>       
        </table>
        </div>
      </>
  );
}
export default Collection;