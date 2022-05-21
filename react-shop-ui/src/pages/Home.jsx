import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Categories />
      <Footer/>
    </div>
  );
};

export default Home;
