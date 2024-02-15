import Image from "next/image";
import google from "../../assets/signin/google.png";
import fb from "../../assets/signin/fb.png";

const Socials = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      <div className="border-2 p-2 rounded-full hover:bg-blue-100 duration-300 cursor-pointer">
        <Image alt="Google Social Login button" src={google} />
      </div>
      <div className="border-2 p-2 rounded-full hover:bg-blue-100 duration-300 cursor-pointer">
        <Image alt="Facebook Social Login button" src={fb} />
      </div>
    </div>
  );
};

export default Socials;
