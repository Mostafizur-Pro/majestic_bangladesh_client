import { MdErrorOutline } from "react-icons/md";

const SignUpForm = () => {
  return (
    <div className="h-full bg-white rounded-2xl p-9 border-b-8 border-blue-500">
      <h1 className=" text-4xl">Register</h1>
      <form className="mt-10">
        <div className="flex justify-between w-full mb-3">
          <label className="text-sm flex flex-col" htmlFor="firstName">
            FirstName
            <input
              className="border-2 outline-none focus:outline-blue-500 duration-300 px-3 rounded py-2"
              type="text"
              name="firstname"
              placeholder="Enter FirstName"
            />
          </label>
          <label className="text-sm flex flex-col" htmlFor="lastName">
            LastName
            <input
              className="border-2 outline-none focus:outline-blue-500 duration-300 px-3 rounded py-2"
              type="text"
              name="lastname"
              placeholder="Enter LastName"
            />
          </label>
        </div>
        <label className="text-sm flex flex-col mb-3" htmlFor="email">
          Email
          <input
            className="border-2 outline-none focus:outline-blue-500 duration-300 px-3 rounded py-2"
            type="email"
            name="email"
            placeholder="Enter Email"
          />
        </label>
        <div className="flex justify-between w-full mb-5">
          <label className="text-sm flex flex-col" htmlFor="password">
            Password
            <input
              className="border-2 outline-none focus:outline-blue-500 duration-300 px-3 rounded py-2"
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </label>
          <label className="text-sm flex flex-col" htmlFor="password">
            Confirm Password
            <input
              className="border-2 outline-none focus:outline-blue-500 duration-300 px-3 rounded py-2"
              type="password"
              name="password"
              placeholder="Confirm Password"
            />
          </label>
        </div>
        <span className=" bg-red-400 text-white pe-3 py-1 rounded text-sm flex items-center w-fit gap-1">
          <MdErrorOutline className="text-lg ms-2" />
          Errors show here
        </span>
        <button
          className="bg-blue-500 text-white w-full py-2 rounded mt-3 mb-3"
          type="submit"
        >
          Register
        </button>
        <span className="text-center text-sm">Already Registered? Login!</span>
      </form>
    </div>
  );
};

export default SignUpForm;
