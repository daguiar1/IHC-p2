import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/CategoriesLogged";
import Footer from "../components/FooterLogged";
import Navbar from "../components/NavBarLogged";

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
