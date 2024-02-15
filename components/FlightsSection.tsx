import Image from "next/image";
import img1 from "../public/images/featured/flight-1.svg";
import img2 from "../public/images/featured/flight-2.svg";
import img3 from "../public/images/featured/flight-3.svg";
import img4 from "../public/images/featured/flight-4.svg";
import planeImg from "../public/images/featured/plane.svg";

const FlightsSection = () => {
  return (
    <div className="mt-32 max-w-7xl mx-auto">
      <div className="items-center sm:items-end flex flex-col">
        <h1 className="text-[#0C0C0C] font-bold text-xl">
          The Most Popular Domestic Flights
        </h1>
        <div className="flex gap-3 mt-4">
          <button className="border text-[#606060] border-[#DFDFDF] rounded px-4">
            Kish
          </button>
          <button className="border text-[#606060] border-[#DFDFDF] rounded px-4">
            Shiraz
          </button>
          <button className="border text-[#606060] border-[#DFDFDF] rounded px-4">
            Mashhad
          </button>
          <button className="border text-[#606060] border-[#DFDFDF] rounded px-4">
            Tehran
          </button>
        </div>
      </div>
      <section className="flex justify-between mt-4">
        <div className="border border-[#DFDFDF] w-fit rounded flex items-center">
          <div className="flex flex-col">
            <p className="flex gap-1 border-b py-[9px] px-2">
              <span className="text-[#1D91CC]">Tehran</span> <Image alt="" src={planeImg}></Image> Mashhad
            </p>
            <p className="flex gap-1 py-[9px] px-2">
              <span className="text-[#2f9224]">Price</span> Start From $111
            </p>
          </div>
          <div>
            <Image src={img1} alt="" className="rounded"></Image>
          </div>
        </div>
        <div className="border border-[#DFDFDF] w-fit rounded flex items-center">
          <div className="flex flex-col">
            <p className="flex gap-1 border-b py-[9px] px-2">
              <span className="text-[#1D91CC]">Tehran</span> <Image alt="" src={planeImg}></Image> Mashhad
            </p>
            <p className="flex gap-1 py-[9px] px-2">
              <span className="text-[#2f9224]">Price</span> Start From $111
            </p>
          </div>
          <div>
            <Image src={img1} alt="" className="rounded"></Image>
          </div>
        </div>
        <div className="border border-[#DFDFDF] w-fit rounded flex items-center">
          <div className="flex flex-col">
            <p className="flex gap-1 border-b py-[9px] px-2">
              <span className="text-[#1D91CC]">Tehran</span> <Image alt="" src={planeImg}></Image> Mashhad
            </p>
            <p className="flex gap-1 py-[9px] px-2">
              <span className="text-[#2f9224]">Price</span> Start From $111
            </p>
          </div>
          <div>
            <Image src={img1} alt="" className="rounded"></Image>
          </div>
        </div>
        <div className="border border-[#DFDFDF] w-fit rounded flex items-center">
          <div className="flex flex-col">
            <p className="flex gap-1 border-b py-[9px] px-2">
              <span className="text-[#1D91CC]">Tehran</span> <Image alt="" src={planeImg}></Image> Mashhad
            </p>
            <p className="flex gap-1 py-[9px] px-2">
              <span className="text-[#2f9224]">Price</span> Start From $111
            </p>
          </div>
          <div>
            <Image src={img1} alt="" className="rounded"></Image>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlightsSection;
