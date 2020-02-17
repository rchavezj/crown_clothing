import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from 'react-router-dom';

const MenuItem = ({ key, title, imageUrl, size, linkUrl, ...otherProps }) => {
    return (
      <div
        className={`${size} menu-item`}
        onClick={() => otherProps.history.push(`${otherProps.match.url}${linkUrl}`) }
      >
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    );
};

export default withRouter(MenuItem);