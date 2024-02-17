import React from "react";
import img1 from "../public/images/featured/img1.svg";
import img2 from "../public/images/featured/img2.svg";
import img3 from "../public/images/featured/img3.svg";
import img4 from "../public/images/featured/img4.svg";
import Image from "next/image";
import FlightsSection from "./FlightsSection";

const Featured = () => {
  return (
    <div className="">
    
      <section className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-items-center mt-8 justify-between mb-14 gap-4">
        <div className=" flex flex-col gap-6 ">
          <Image src={img1} alt="img1"></Image>
          <Image src={img2} alt="img1"></Image>
        </div>
        <div>
          <Image src={img3} alt="img1"></Image>
        </div>
        <div className="sm:col-span-2 md:col-span-1">
          <Image src={img4} alt="img1"></Image>
        </div>
      </section>
    </div>
  );
};

export default Featured;
