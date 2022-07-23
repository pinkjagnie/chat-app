import React from "react";

import Header from "../components/Header";
import About from "../components/About";
import Consultant from "../components/Consultant";

import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const Home = () => {
 

  return(
    <div className="chatWrapper">
      <Header />
      <About />
      <Consultant />
    </div>
  )
};

export default Home;