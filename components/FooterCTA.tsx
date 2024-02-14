import Image from "next/image";
import img1 from "../public/images/footer/cta-1.svg";
import img2 from "../public/images/footer/cta-2.svg";
import img3 from "../public/images/footer/cta-3.svg";
import img4 from "../public/images/footer/cta-4.svg";

const FooterCTA = () => {
  return (
    <section className="bg-[#E8F4FA] grid grid-cols-2 md:grid-cols-4 px-10 md:px-20 mt-32">
      <div className="flex  flex-col items-center py-8">
        <Image src={img1} alt="img 1"></Image>
        <p className="font-bold text-xl text-[#092B3D] text-center">
          The lowest ticket purchase rate
        </p>
      </div>
      <div className="flex flex-col items-center py-8">
        <Image src={img2} alt="img 1"></Image>
        <p className="font-bold text-xl text-[#092B3D]">Online Service</p>
      </div>
      <div className="flex flex-col items-center py-8">
        <Image src={img3} alt="img 1"></Image>
        <p className="font-bold text-xl text-[#092B3D]">24 hour response</p>
      </div>
      <div className="flex flex-col items-center py-8">
        <Image src={img4} alt="img 1"></Image>
        <p className="font-bold text-xl text-[#092B3D] text-center">
          Easy and convenient access
        </p>
      </div>
    </section>
  );
};

export default FooterCTA;
