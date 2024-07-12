import React from "react";
import "../App.css";
import Spline from "@splinetool/react-spline";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <div className="content">
        <Navbar />
        <main></main>
      </div>
      <div id="wrapper">
        <Spline
          className="spline"
          scene="https://prod.spline.design/JiIU5OCa9m73w5qM/scene.splinecode"
        />
      </div>
    </>
  );
}
