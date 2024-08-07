import React from 'react';
import './Conversation.css';
export default function Conversation(props) {
  return (
    <div className="conversation">
        <div className="detail">
            <img src={props.image} alt="" />
            <div><h4>{props.name}</h4>
            <h5>{props.msg}</h5></div>
        </div>
        <div className='reply'><h6>REPLY</h6></div>
    </div>
  );
}
