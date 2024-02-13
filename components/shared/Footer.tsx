import appleIcon from "../../public/icon/apple-icon.svg";
import playStoreIcon from "../../public/icon/play-store-icon.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <section className="max-w-7xl mx-auto pt-6">
      {/* footer Heading */}
      <section className="flex items-center justify-between">
        <div className=" flex gap-4">
          <div className="w- rounded bg-[#11577A]">
            <div className="py-4 px-5 flex gap-2 text-white items-center">
              <Image className="w-7 h-[34px]" src={appleIcon} alt="" />
              <p className="font-bold text-[20px]">Apple Store</p>
            </div>
          </div>
          <div className="w- rounded bg-[#11577A]">
            <div className="py-4 px-5 flex gap-2 text-white items-center">
              <Image className="w-7 h-[34px]" src={playStoreIcon} alt="" />
              <p className="font-bold text-[20px]">Play Store</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h1 className="font-bold text-xl">Bilito Application</h1>
          <p>
            By installing Billito application, you can enjoy the convenience and
            speed of booking.
          </p>
        </div>
      </section>
      {/* footer body */}
      <div></div>
      {/* footer ending */}
      <div></div>
    </section>
  );
};

export default Footer;
