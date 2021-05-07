import "./Home.css";
import React from "react";
import Header from "../components/header/Header";
import Auth from "../../services/Auth";

const Home = () => {
  const userName = Auth.currentUserName();

  return (
    <>
      <Header />
      <div className="title-container">
        <h1 className="home-title">Welcome {userName} </h1>
      </div>
    </>
  );
};

export default Home;
