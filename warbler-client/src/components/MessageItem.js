import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const MessageItem = ({
    date,
    profileImageUrl,
    text,
    username,
    removeMessage,
    isCorrectUser
  }) => (
    <div className="messageItem">
      <li className="list-group-item">
        <img
          src={profileImageUrl || DefaultProfileImg}
          alt={username}
          className="timeline-image"
        />
        <div className="message-area">
          <div className="spaceBetween">
            <Link to="/">@{username} &nbsp;</Link>
            <span className="text-muted">
              <Moment className="text-muted" format="Do MMM YYYY">
                {date}
              </Moment>
            </span>
          </div>
          <p>{text}</p>
          {isCorrectUser && (
            <button className="btn btn-danger" onClick={removeMessage}>
              Delete
            </button>
          )}
        </div>
      </li>
    </div>
  );
  
  export default MessageItem;
  