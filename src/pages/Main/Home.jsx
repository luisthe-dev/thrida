import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome To Thrida</h1>
      <Link to={"/signin"}>Go To Sign In</Link>
    </div>
  );
};

export default Home;
