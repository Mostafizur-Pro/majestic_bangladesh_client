"use client";
import Link from "next/link";
import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";

const SignUpForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="h-full bg-white rounded-2xl p-6 lg:p-9 border-b-8 border-blue-500 text-center flex flex-col justify-between">
      <>
        <h1 className="text-start text-4xl">Register</h1>
        <form className="lg:mt-10 mt-6 flex flex-col items-start">
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-3 justify-between w-full mb-3">
            <label
              className="text-sm flex flex-col items-start"
              htmlFor="firstName"
            >
              FirstName
              <input
                className="border-2 outline-none focus:outline-blue-500 duration-300 px-3 lg:w-auto w-full rounded py-2"
                type="text"
                name="firstname"
                placeholder="Enter FirstName"
              />
            </label>
            <label
              className="text-sm flex flex-col items-start"
              htmlFor="lastName"
            >
              LastName
              <input
                className="border-2 outline-none lg:w-auto w-full focus:outline-blue-500 duration-300 px-3 rounded py-2"
                type="text"
                name="lastname"
                placeholder="Enter LastName"
              />
            </label>
          </div>
          <label
            className="text-sm flex flex-col w-full items-start mb-3"
            htmlFor="email"
          >
            Email
            <input
              className="border-2 outline-none w-full focus:outline-blue-500 duration-300 px-3 rounded py-2"
              type="email"
              name="email"
              placeholder="Enter Email"
            />
          </label>
          <div className="flex lg:flex-row flex-col gap-3 justify-between w-full mb-5">
            <label
              className="text-sm flex flex-col items-start"
              htmlFor="password"
            >
              Password
              <input
                className="border-2 outline-none lg:w-auto w-full focus:outline-blue-500 duration-300 px-3 rounded py-2"
                type="password"
                name="password"
                placeholder="Enter Password"
              />
            </label>
            <label
              className="text-sm flex flex-col items-start"
              htmlFor="password"
            >
              Confirm Password
              <input
                className="border-2 outline-none lg:w-auto w-full focus:outline-blue-500 duration-300 px-3 rounded py-2"
                type="password"
                name="password"
                placeholder="Confirm Password"
              />
            </label>
          </div>
          <span
            className={`${
              error ? "flex" : "hidden"
            } bg-red-400 text-white pe-3 py-1 rounded text-sm items-center w-fit gap-1`}
          >
            <MdErrorOutline className="text-lg ms-2" />
            {error}
          </span>
          <button
            className="bg-[#1D91CC] hover:bg-[#167db1] duration-300 text-white hover:bgblue w-full py-2 rounded mt-3 mb-3 flex items-center justify-center gap-2"
            type="submit"
          >
            Register
            {loading && (
              <span className="loading loading-spinner text-white"></span>
            )}
          </button>
        </form>
      </>
      <span className="w-full text-sm mt-auto">
        Already Registered?{" "}
        <Link
          className="hover:underline duration-300 hover:text-blue-500 "
          href={"/signin"}
        >
          Login!
        </Link>
      </span>
    </div>
  );
};

export default SignUpForm;
