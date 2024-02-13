import appleIcon from "../../public/icon/apple-icon.svg";
import playStoreIcon from "../../public/icon/play-store-icon.svg";
import appIcon from "../../public/icon/logo-blue.svg";
import footerCompImg1 from "../../public/icon/footer-comp-1.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <section className="max-w-7xl mx-auto pt-6 mt-12">
      {/* //? footer Heading section */}
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
      {/*//? footer body section */}
      <hr className="mb-8 mt-8 border border-[#EDEDED]" />
      <section className="mb-6 flex justify-between">
        <div>
          <h1 className="font-bold text-2xl">Useful links</h1>
          <ul className="text-lg leading-9">
            <li className="">What&apos;s Next?</li>
            <li>Contact Us</li>
            <li>Visa Issue</li>
            <li>Online Ticket</li>
            <li>Best Hotel Booking</li>
          </ul>
        </div>
        <div className="flex flex-col items-end gap-8">
          <Image alt="" src={appIcon}></Image>
          <p>Support Phone: 987 654 320 21</p>
          <p>
            Address of the head office: Tehran, Azadi Square, Azadi St., Jihoun
            St., West Tos.
          </p>
        </div>
      </section>
      {/*//? footer ending */}
      <section className="flex justify-between">
        <div className="flex gap-5">
          <Image alt="" src={footerCompImg1}></Image>
          <Image alt="" src={footerCompImg1}></Image>
          <Image alt="" src={footerCompImg1}></Image>
          <Image alt='' src={footerCompImg1}></Image>
          <Image alt="" src={footerCompImg1}></Image>
        </div>
        <div className="flex gap-5">
        <Image alt="" src={footerCompImg1}></Image>
          <Image alt="" src={footerCompImg1}></Image>
          <Image alt="" src={footerCompImg1}></Image>
          <Image alt='' src={footerCompImg1}></Image>
          <Image alt="" src={footerCompImg1}></Image>
        </div>
      </section>
      <hr className="border border-[#EDEDED] mt-8" />
    </section>
  );
};

export default Footer;
