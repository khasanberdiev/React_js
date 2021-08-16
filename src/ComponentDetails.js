import React from "react";
import ReactDom from "react-dom";

const ComponentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src="" />
      </a>

      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00 pm</span>
        </div>
        <div className="text">Nice blog post</div>
      </div>
    </div>
  );
};
