import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Table from "./Table";
import Axios from "axios";
// import Particles from "react-tsparticles";

function App() {
  return (
    <div className="parent-div">
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
