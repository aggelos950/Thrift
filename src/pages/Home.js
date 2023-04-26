import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DarkToLight from "../components/DarkToLight";
import HomePageContent from "../components/HomePageContent";
import "../styles/homePage.css"

function Home() {
  return (
    <div >
      <Header />
      <HomePageContent />
      <DarkToLight />
      <Footer />
    </div>
  );
}

export default Home;
