import React from "react";
import Header from "../header/Header";
import SummarySection from "../summarySection/SummarySection";
import Blog from "../blog/Blog";
import ProjectSection from "../projectSection/ProjectSection";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <SummarySection />
      <Blog />
      <ProjectSection />
      <Footer />
    </div>
  );
};

export default Home;
