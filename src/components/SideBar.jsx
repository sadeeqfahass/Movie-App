import React from "react";

function SideBar() {
  function handleClick(e) {
    console.log(e.target)
  }
  return (
    <div className="sidebar">
      <div className="container">
        <div className="logo">
          <h2>BlackBox Movies</h2>
        </div>
        <div className="categories-con">
          <div className="menu">
            <h3 className="title">Menu</h3>
            <p onClick={handleClick}>Popular</p>
            <p>Coming Soon</p>
            <p>Top Rated</p>
          </div>
          <div className="categories">
            <h3 className="title">Categories</h3>
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
