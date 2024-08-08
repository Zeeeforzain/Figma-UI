import React from "react";
import "./Collection.css"; 
function Collection(props) {
  let list = [
    {
        "img":"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" ,
        "name": "Milli",
        "email": "milli@gmail.com",
        "designation": "Manager",
        "organization": "Organization",
        "status": "Online",
        "date": "12/12/12",
        "edit":"Edit"
      },
      {
        "img":"https://images.pexels.com/photos/1458332/pexels-photo-1458332.jpeg?auto=compress&cs=tinysrgb&w=600" ,
        "name": "Alexa Liras",
        "email": "alexa@gmail.com",
        "designation": "Programmer",
        "organization": "Developer",
        "status": "Online",
        "date": "12/12/8",
        "edit":"Edit"
      },
      {
        "img":"https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600" ,
        "name": "Laurent",
        "email": "raurent@gmail.com",
        "designation": "Executive",
        "organization": "Projects",
        "status": "Online",
        "date": "12/12/12",
        "edit":"Edit"
    },
    {
      "img":"https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&w=600" ,
      "name": "Daniel",
      "email": "daniel@gmail.com",
      "designation": "Programmer",
        "organization": "Developer",
        "status": "Online",
        "date": "12/12/12",
        "edit":"Edit"
    },
    {
      "img":"https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=600" ,
        "name": "Mark Wilson",
        "email": "mark@gmail.com",
        "designation": "Designer",
        "organization": "UX/UI Design",
        "status": "Online",
        "date": "12/12/12",
        "edit":"Edit"
    }
  ]
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
          {list.map((row  )=>(
            <tr>
                <td className="Author"><div className="shape"><img src={row.img} alt="" /></div><div className="auth"><h3>{row.name}</h3><h5>{row.email}</h5></div></td>
                <td className="function"><h3>{row.designation}</h3><h5>{row.organization}</h5></td>
                <td className="status"><div className="stat">{row.status}</div></td>
                <td className="date">{row.date}</td>
                <td className="action">{row.edit}</td>
            </tr>
        ))
        }
            </tbody>       
        </table>
        </div>
      </>
  );
}
export default Collection;