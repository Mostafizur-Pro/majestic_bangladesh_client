import React from "react";
import Featured from "../Featured";
import FooterCTA from "../FooterCTA";
import HomeBanner from "./banner";
import FlightsSection from "../FlightsSection";
function Home() {
  return (
    <div className="desktop_container">
      <HomeBanner />
      <FlightsSection />
      <Featured />
      <FooterCTA />
    </div>
  );
}

export default Home;
