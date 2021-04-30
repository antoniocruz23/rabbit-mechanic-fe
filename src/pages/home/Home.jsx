import "./Home.css";
import React from "react";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="title-container">
        <h1 className="home-title">Welcome "user"</h1>
      </div>
    </>
  );
};

export default Home;
