import Image from "next/image";
import Link from "next/link";
import appleIcon from "../../public/icon/apple-icon.svg";
import fbIcon from "../../public/icon/fb-icon.svg";
import gotopIconBlack from "../../public/icon/goTopIcon-black.svg";
import instragramIcon from "../../public/icon/instra-icon.svg";
import inIcon from "../../public/icon/linkedin-icon.svg";
import appIcon from "../../public/icon/logo-blue.svg";
import playStoreIcon from "../../public/icon/play-store-icon.svg";
import taligrameIcon from "../../public/icon/taligram-icon.svg";
import twitterIcon from "../../public/icon/twitter-icon.svg";
import ytIcon from "../../public/icon/yt-icon.svg";
import img1 from "../../public/images/footer/img1.svg";
import img2 from "../../public/images/footer/img2.svg";
import img3 from "../../public/images/footer/img3.svg";
import img4 from "../../public/images/footer/img4.svg";
import img5 from "../../public/images/footer/img5.svg";
import FooterCTA from "../FooterCTA";

const Footer = () => {
  return (
    <>
      <FooterCTA></FooterCTA>
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
            <p className="text-center">
              By installing Billito application, you can enjoy the convenience
              and speed of booking.
            </p>
          </div>
        </section>
        {/*//? footer body section */}
        <hr className="mb-4 mt-4 md:mb-8 md:mt-8 border border-[#EDEDED]" />
        <section className="mb-6 md:flex md:flex-row-reverse justify-between">
          <div className="flex flex-col items-center md:items-end gap-1 md:gap-8">
            <Image alt="logo" src={appIcon}></Image>
            <p>Support Phone: 987 654 320 21</p>
            <p className="text-center">
              Address of the head office: Tehran, Azadi Square, Azadi St.,
              Jihoun St., West Tos.
            </p>
          </div>
          <div className="text-center mt-4 md:mt-0">
            <h1 className="font-bold text-2xl">Useful links</h1>
            <ul className="text-lg leading-9">
              <li className="">
                <Link href={""}>What&apos;s Next?</Link>
              </li>
              <li>
                <Link href={""}>Contact Us</Link>
              </li>
              <li>
                <Link href={""}>Visa Issue</Link>
              </li>
              <li>
                <Link href={""}>Online Ticket</Link>
              </li>
              <li>
                <Link href={""}>Best Hotel Booking</Link>
              </li>
            </ul>
          </div>
        </section>
        {/*//? footer ending */}
        <section className="flex md:flex-row flex-col items-center md:gap-0 gap-4 md:justify-between">
          <div className="flex gap-5">
            <Image alt="company 1" src={img1}></Image>
            <Image alt="company 2" src={img2}></Image>
            <Image alt="company 3" src={img3}></Image>
            <Image alt="company 4" src={img4}></Image>
            <Image alt="company 5" src={img5}></Image>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex gap-5">
              <Link href={""}>
                <Image alt="twitter icon" src={twitterIcon}></Image>
              </Link>
              <Link href={""}>
                <Image alt="fb icon" src={fbIcon}></Image>
              </Link>
              <Link href={""}>
                <Image alt="instragrame icon" src={instragramIcon}></Image>
              </Link>
              <Link href={""}>
                <Image alt="yt icon" src={ytIcon}></Image>
              </Link>
              <Link href={""}>
                <Image alt="Linkedin icon" src={inIcon}></Image>
              </Link>
              <Link href={""}>
                <Image alt="taligram icon" src={taligrameIcon}></Image>
              </Link>
            </div>
            <p className="text-[#0077DB]">diginieit@gmail.com</p>
          </div>
        </section>
        <hr className="border border-[#EDEDED] md:mt-8 mt-3" />
        <section className="flex flex-col items-center justify-center mt-4">
          <Image
            className="cursor-pointer"
            alt="icon"
            src={gotopIconBlack}
          ></Image>
          <p className="mt-2 cursor-pointer">Back To Top</p>
        </section>
      </section>
    </>
  );
};

export default Footer;
