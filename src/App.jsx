import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="main">
        <SideBar />
        <Content />
      </div>
    </>
  );
}

export default App;
