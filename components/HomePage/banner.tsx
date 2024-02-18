import React from "react";
import cover from "../../public/image/cover1.png";
import Image from "next/image";
import { MdFlight } from "react-icons/md";
import ButtonPrimary from "../Button/ButtonPrimary";


const HomeBanner = () => {
  return (
    <div>
      <div className=" grid  relative ">
        <div className="relative">
          <Image className="w-full h-60 bg-current" src={cover} alt="" />
        </div>

        <div className=" w-full ">
          <div className="sm:absolute  w-full mx-0 -bottom-20  ">
            <div className=" sm:w-10/12 w-full mx-auto bg-white shadow-lg   rounded-md h-auto">
              <div className="flex   flex-row-reverse gap-5 mb-5  pr-5">
                <div className="flex justify-center items-center gap-3">
                  <p className=" text-gray-500">Domestic Flight</p>
                  <MdFlight />
                </div>
                <div>
                  <div className="flex  justify-center items-center gap-3">
                    <p
                      className={` ${
                        true
                          ? " text-blue-500 border-b   border-blue-500 "
                          : "text-gray-500"
                      }`}
                    >
                      Internationl Flight
                    </p>
                    <MdFlight />
                  </div>
                </div>
              </div>
              {/* // botton */}
              <div className=" flex gap-2 flex-row-reverse pr-5  ">
                <ButtonPrimary
                  children={"Botton 1"}
                  styleReverse={true}
                ></ButtonPrimary>
                <ButtonPrimary
                  children={"Botton 2"}
                  styleReverse={false}
                ></ButtonPrimary>
                <ButtonPrimary
                  children={"Botton 3"}
                  styleReverse={true}
                ></ButtonPrimary>
              </div>
              <div className="px-4 flex gap-3 justify-between items-center  ">
                <ButtonPrimary
                  style={{}}
                  children={"Search"}
                  styleReverse={false}
                ></ButtonPrimary>
                <ButtonPrimary
                  style={{}}
                  children={"Search"}
                  styleReverse={true}
                ></ButtonPrimary>{" "}
                <ButtonPrimary
                  style={{}}
                  children={"Search"}
                  styleReverse={true}
                ></ButtonPrimary>
                <ButtonPrimary
                  style={{}}
                  children={"Search"}
                  styleReverse={true}
                ></ButtonPrimary>
                <ButtonPrimary
                  style={{}}
                  children={"Search"}
                  styleReverse={true}
                ></ButtonPrimary>{" "}
                <ButtonPrimary
                  style={{}}
                  children={"Search"}
                  styleReverse={true}
                ></ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
