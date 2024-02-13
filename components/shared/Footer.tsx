import Image from "next/image";
import appleIcon from "../../public/icon/apple-icon.svg";
import appIcon from "../../public/icon/logo-blue.svg";
import playStoreIcon from "../../public/icon/play-store-icon.svg";
import img1 from "../../public/images/footer/img1.svg";
import img2 from "../../public/images/footer/img2.svg";
import img3 from "../../public/images/footer/img3.svg";
import img4 from "../../public/images/footer/img4.svg";
import img5 from "../../public/images/footer/img5.svg";
import fbIcon from "../../public/icon/fb-icon.svg";
import twitterIcon from "../../public/icon/twitter-icon.svg";
import instragramIcon from "../../public/icon/instra-icon.svg";
import ytIcon from "../../public/icon/yt-icon.svg";
import inIcon from "../../public/icon/linkedin-icon.svg";
import taligrameIcon from "../../public/icon/taligram-icon.svg";
const Footer = () => {
  return (
    <section className="max-w-7xl mx-auto pt-6">
      {/* //? footer Heading section */}
      <section className="flex flex-col md:flex-row items-center justify-between">
        <div className=" flex gap-4">
          <div className=" rounded bg-[#11577A]">
            <div className="py-4 px-5 flex gap-2 text-white items-center">
              <Image className="w-7 h-[34px]" src={appleIcon} alt="" />
              <p className="font-bold text-[20px]">Apple Store</p>
            </div>
          </div>
          <div className="rounded bg-[#11577A]">
            <div className="py-4 px-5 flex gap-2 text-white items-center">
              <Image className="w-7 h-[34px]" src={playStoreIcon} alt="" />
              <p className="font-bold text-[20px]">Play Store</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end mt-3 md:mt-0">
          <h1 className="font-bold text-xl">Bilito Application</h1>
          <p>
            By installing Billito application, you can enjoy the convenience and
            speed of booking.
          </p>
        </div>
      </section>
      {/*//? footer body section */}
      <hr className="mb-8 mt-8 border border-[#EDEDED]" />
      <section className="mb-6 md:flex md:flex-row-reverse justify-between">
        <div className="flex flex-col items-center md:items-end gap-1 md:gap-8">
          <Image src={appIcon}></Image>
          <p>Support Phone: 987 654 320 21</p>
          <p>
            Address of the head office: Tehran, Azadi Square, Azadi St., Jihoun
            St., West Tos.
          </p>
        </div>
        <div className="text-center mt-4 md:mt-0">
          <h1 className="font-bold text-2xl">Useful links</h1>
          <ul className="text-lg leading-9">
            <li className="">What&apos;s Next?</li>
            <li>Contact Us</li>
            <li>Visa Issue</li>
            <li>Online Ticket</li>
            <li>Best Hotel Booking</li>
          </ul>
        </div>
      </section>
      {/*//? footer ending */}
      <section className="flex md:flex-row flex-col items-center md:gap-0 gap-4 md:justify-between">
        <div className="flex gap-5">
          <Image src={img1}></Image>
          <Image src={img2}></Image>
          <Image src={img3}></Image>
          <Image src={img4}></Image>
          <Image src={img5}></Image>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-5">
            <Image src={twitterIcon}></Image>
            <Image src={fbIcon}></Image>
            <Image src={instragramIcon}></Image>
            <Image src={ytIcon}></Image>
            <Image src={inIcon}></Image>
            <Image src={taligrameIcon}></Image>
          </div>
          <p>diginieit@gmail.com</p>
        </div>
      </section>
      <hr className="border border-[#EDEDED] mt-8" />
    </section>
  );
};

export default Footer;
