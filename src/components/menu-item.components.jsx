import React from "react";


const MenuItem = (props) => {
    return (
      <div className="menu-item">
        <div className="content">
          <h1 className="title">{props.title}</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    );
};

export default MenuItem;