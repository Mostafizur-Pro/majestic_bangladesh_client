import React from "react";
import Featured from "../Featured";
import FooterCTA from "../FooterCTA";
import HomeBanner from "./banner";
import FlightsSection from "../FlightsSection";
import FAQ from "../FAQ";
function Home() {
  return (
    <div className="desktop_container">
      <HomeBanner />
      <FlightsSection />
      <Featured />
      <FAQ />
      <FooterCTA />
    </div>
  );
}

export default Home;
