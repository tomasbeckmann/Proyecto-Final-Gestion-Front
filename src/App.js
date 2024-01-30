import React, { useState, useEffect } from "react";
import { Navigation } from "./components/landingpage/navigation";
import { Header } from "./components/landingpage/header";
import { Features } from "./components/landingpage/features";
import { About } from "./components/landingpage/about";
import { Services } from "./components/landingpage/services";
// import { Gallery } from "./components/landingpage/gallery";
import { Testimonials } from "./components/landingpage/testimonials";
import { Team } from "./components/landingpage/Team";
// import { Contact } from "./components/landingpage/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      {/* <Gallery data={landingPageData.Gallery} /> */}
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      {/* <Contact data={landingPageData.Contact} /> */}
    </div>
  );
};

export default App;