import ButtonPrimary from "../Button/ButtonPrimary";
import Image from "next/image";
import gult from "../../public/image/gulfAir.png";

export default function Ticket() {
  return (
    <div className="border shadow-md ml-2 mr-2 mt-3">
      <div className="p-3">
        {/* botton  */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-x-3">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              Badge
            </span>
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              Badge
            </span>
          </div>
          <div className="flex gap-x-3">
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Badge
            </span>{" "}
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Badge
            </span>
          </div>
        </div>
        {/* // 2n                            */}
        <div className="mt-8 flex justify-between items-center">
          <div className="flex gap-x-4 justify-between items-center">
            <ButtonPrimary children={"Take Detials"} />
            <p className=" text-[14px] text-blue-500">Toman 34,3432,2344</p>
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className="text-center">
              <p className=" font-bold">21:50</p>
              <p className=" text-gray-500 text-[14px]">Dubai(Dxb)</p>
            </div>
            <div className="text-center flex flex-col gap-y-9 text-gray-500 text-[14px]">
              <p className="  ">21:50</p>
              <p className="">21:50</p>
            </div>
            <div className="text-center">
              <p className=" font-bold">21:50</p>
              <p className=" text-gray-500 text-[14px]">Dubai(Dxb)</p>
            </div>
            <div className="text-center flex flex-col   text-gray-500 text-[14px]">
              <Image className="w-20 h-10 bg-current" src={gult} alt="imge" />
              <p className="">21:50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
