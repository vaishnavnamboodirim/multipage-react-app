/*index.jsx*/
import React from "react";
import { Link } from "react-router-dom";
//Functional Component 
const MainPage = () => {
  return (
    <div>
      <h3>Welcome to the React Router Tutorial</h3>
      <small>Main Page</small>
      <Link to="/user">Show list of users</Link>
    </div>
  );
};

export default MainPage;