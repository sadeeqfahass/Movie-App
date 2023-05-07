import React from "react";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="container">
        <div className="logo">
          <h2>BlackBox Movies</h2>
        </div>
        <div className="categories-con">
          <div className="menu">
            <p className="title">Menu</p>
            <p>Home</p>
            <p>Coming Soon</p>
            <p>Top Rated</p>
          </div>
          <div className="categories">
            <p className="title">Categories</p>
            <p>Drama</p>
            <p>Action</p>
            <p>Comedy</p>
            <p>Adult</p>
            <p>Animation</p>
            <p>Kids</p>
            <p>Documentaries</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
