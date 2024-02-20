"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { MdErrorOutline } from "react-icons/md";

const SignUpForm = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const passwordRegex = /^.{8,}$/;

    if (!(formData.newPassword === formData.confirmPassword)) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    if (!passwordRegex.test(formData.newPassword)) {
      setError("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }
    setError("");
    const user = {
      name: formData.firstName + formData.lastName,
      email: formData.email,
      password: formData.confirmPassword,
    };
    console.log(user);
    setLoading(false);
  };

  return (
    <div className="h-full bg-white rounded-2xl p-6 lg:p-9 md:border-b-8 md:border-blue-500 text-center flex flex-col justify-between">
      <>
        <h1 className="text-start text-4xl">Register</h1>
        <form
          onSubmit={handleSubmit}
          className="lg:mt-10 mt-6 flex flex-col items-start"
        >
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-3 justify-between w-full mb-3">
            <label
              className="text-sm flex flex-col items-start"
              htmlFor="firstName"
            >
              FirstName
              <input
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    firstName: e.target.value,
                  })
                }
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
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    lastName: e.target.value,
                  })
                }
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
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
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
              New password
              <input
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    newPassword: e.target.value,
                  })
                }
                className="border-2 outline-none lg:w-auto w-full focus:outline-blue-500 duration-300 px-3 rounded py-2"
                type="password"
                name="newPassword"
                placeholder="Enter Password"
              />
            </label>
            <label
              className="text-sm flex flex-col items-start"
              htmlFor="password"
            >
              Confirm Password
              <input
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
                className="border-2 outline-none lg:w-auto w-full focus:outline-blue-500 duration-300 px-3 rounded py-2"
                type="password"
                name="confirmPassword"
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
