"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Form = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loginLoading, setLoginLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoginLoading(true);

    const email = formData.email;
    const password = formData.password;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid credentials");
        setLoginLoading(false);
        return;
      }
      setError("")
      setLoginLoading(false);
      router.replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center mt-10 relative"
    >
      <div className="flex flex-col">
        <label className="flex flex-col mb-6" htmlFor="email">
          <span className="text-sm">Email</span>
          <input
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="px-3 py-1 border-2 rounded focus:outline-blue-500 w-[320px]"
            type="email"
            name="email"
          />
        </label>
        <label className="flex flex-col relative" htmlFor="password">
          <span className="text-sm">Password</span>
          <input
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            className="px-3 py-1 border-2 rounded focus:outline-blue-500 w-[320px]"
            type={show ? "text" : "password"}
            name="password"
          />
          <IoEye
            onClick={() => setShow(!show)}
            className={`absolute right-[10px] bottom-[8px] text-lg hover:text-blue-500 duration-300 cursor-pointer ${
              show ? "block" : "hidden"
            }`}
          />
          <IoEyeOff
            onClick={() => setShow(!show)}
            className={`absolute right-[10px] bottom-[8px] text-lg hover:text-blue-500 duration-300 cursor-pointer ${
              !show ? "block" : "hidden"
            }`}
          />
        </label>
        <div className="flex justify-between mt-3 items-start">
          <span
            className={`bg-red-500 text-sm rounded px-2 text-white  pointer-events-none ${
              error ? "opacity-100" : "opacity-0"
            }`}
          >
            {error}
          </span>
          <span className="text-sm hover:underline hover:text-blue-500 duration-300 cursor-pointer">
            Forgot your password?
          </span>
        </div>
      </div>
      <button
        className="bg_primary  text-white px-6 py-2 rounded mt-8 cursor-pointer flex items-center gap-2"
        type="submit"
      >
        Sign in
        {loginLoading && (
          <span className="loading loading-spinner text-white"></span>
        )}
      </button>
    </form>
  );
};

export default Form;
