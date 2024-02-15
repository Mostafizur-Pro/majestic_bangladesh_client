import React from "react";
import img1 from "../public/images/featured/img1.svg";
import img2 from "../public/images/featured/img2.svg";
import img3 from "../public/images/featured/img3.svg";
import img4 from "../public/images/featured/img4.svg";
import Image from "next/image";
import FlightsSection from "./FlightsSection";

const Featured = () => {
  return (
    <>
      <FlightsSection></FlightsSection>
      <section className="flex border-2 border-red-700 mt-8 justify-between max-w-7xl mx-auto mb-14">
        <div className="flex flex-col gap-6">
          <Image src={img1} alt="img1"></Image>
          <Image src={img2} alt="img1"></Image>
        </div>
        <div>
          <Image src={img3} alt="img1"></Image>
        </div>
        <div>
          <Image src={img4} alt="img1"></Image>
        </div>
      </section>
    </>
  );
};

export default Featured;
