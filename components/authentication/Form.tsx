"use client";
import { FormEvent, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Form = () => {
  const [show, setShow] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mt-10 ">
      <div className="flex flex-col items-end">
        <label className="flex flex-col mb-6" htmlFor="email">
          <span className="text-sm">Email</span>
          <input
            className="px-3 py-1 border-2 rounded focus:outline-blue-500 w-[320px]"
            type="email"
            name="email"
          />
        </label>
        <label className="flex flex-col relative" htmlFor="password">
          <span className="text-sm">Password</span>
          <input
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
        <span className="text-sm mt-2 hover:underline hover:text-blue-500 duration-300 cursor-pointer">
          Forgot your password?
        </span>
      </div>
      <button
        className="bg_primary text-white px-10 py-2 rounded mt-8 cursor-pointer "
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
};

export default Form;
