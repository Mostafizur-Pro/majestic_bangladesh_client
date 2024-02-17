import { Satisfy } from "next/font/google";
import Image from "next/image";
import Airplane from "../../assets/signin/Airplane.png";
import tajmahal from "../../assets/signin/Tajmahal.png";
import others from "../../assets/signin/others.png";
import Form from "./Form";
import Socials from "./Socials";
import Link from "next/link";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
});

const Signin = () => {
  return (
    <div className="desktop_container my-6 flex justify-center h-fit ">
      <div
        className={`h-[739px] hidden md:block rounded-s-3xl w-1/2 bg-no-repeat bg-[url('https://i.ibb.co/RQq5RWJ/Rectangle-26.png')]`}
      >
        <h1
          className={`text-5xl text-center pt-24 text-white ${satisfy.className}`}
        >
          Bangladesh Majestic
        </h1>
        <p className="w-2/3 text-center mx-auto mt-7 text-white ">
          Travel is the only purchase that enriches you in ways beyond metarial
          wealth.
        </p>
      </div>
      <div className=" w-1/2  rounded-e-3xl relative flex flex-col ">
        <Image className="absolute right-0 top-10" alt="plane" src={Airplane} />

        <h1 className="md:text-7xl text-5xl font-bold text_Primary text-center mt-24">
          Welcome
        </h1>
        <p className="text-center mt-3 text-gray-500">Login with Email</p>

        <Form />

        {/* divider */}
        <div className="divider w-48 md:w-64 text-sm mx-auto my-6">OR</div>

        <Socials />

        <span className="text-sm text-center mt-3">
          Don&apos;t have an account?{" "}
          <Link
            className="font-bold hover:text-blue-500 duration-300"
            href={`signup`}
          >
            Register now!
          </Link>
        </span>

        <Image
          className="absolute bottom-0 lg:block hidden"
          alt="image of tajmahal"
          src={tajmahal}
        />
        <Image
          className="absolute bottom-0 right-0  lg:block hidden"
          alt="image of others"
          src={others}
        />
      </div>
    </div>
  );
};

export default Signin;
