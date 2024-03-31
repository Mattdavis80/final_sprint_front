import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="header-text">
        Welcome The Final Sprint Individual Project By Matthew Davis
      </h1>
      <p className="intro-text">
        The purpose of this project is to create an app that will take the
        numbers a user inputs into a Binary Search Tree. Each time the user
        processes the numbers it is saved to a local database. You can view all
        contents of the local database by visiting the "Previous Trees page"{" "}
      </p>
      <p className="intro-text">
        If you have made it this far and are wondering how to start the back end
        of this application, first visit the following link to view the back end
        repository
        <a href="https://github.com/Mattdavis80/s4_dsa_sprint_final">
          By Clicking Here
        </a>
        <p className="intro-text">
          Once downloaded, Please change the contents of the
          "application.properties" to your own local MySQL database variables.{" "}
        </p>
        <p className="intro-text">
          The entry point of the backend application is the
          DsaSprintApplication. You will need to run this file to ensure the
          backend is running. Once this is done, you should be able to create
          Binary Trees and view previous database entries!
        </p>
      </p>
    </div>
  );
};

export default HomePage;
