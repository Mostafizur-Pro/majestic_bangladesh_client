 
  "use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import { FaChevronDown } from "react-icons/fa";

interface InputData {
    order: string;
}

const MyFormComponent: React.FC = () => {
  const [inputData, setInputData] = useState<InputData>({
    order: "",
  });

  const handleChanges = (e: ChangeEvent<HTMLSelectElement>): void => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("data searching ", inputData);
    // Add any additional logic for form submission
  };

  return (
    <div className="container">
      <form
        onSubmit={onSubmit}
        className="flex flex-row gap-[45px] p-10 rounded-[10px] bg-white shadow-3xl"
      >
        <div className="relative w-1/5">
          <select
            onChange={handleChanges}
            name="crewType"
            value={inputData.order}
            className="w-full text-darkBlue p-[10px] border border-b-midBlue border-transparent appearance-none leading-tight focus:outline-none focus:border focus:border-blue focus:rounded-md"
          >
            <option value="">متن log inی </option>
            <option value="1">پیشنهاد بیلیتو</option>
            <option value="2">گران‌ترین</option>
            <option value='3'>سریع‌ترین</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            {/* You might want to import AngleDown and use it here */}
            <FaChevronDown />
          </div>
        </div>
        <div className="relative w-4/5">
          <select
            onChange={handleChanges}
            name="crewType"
            value={inputData.order}
            className="w-full text-darkBlue p-[10px] border border-b-midBlue border-transparent appearance-none leading-tight focus:outline-none focus:border focus:border-blue focus:rounded-md"
          >
            <option value="">متن log inی </option>
            <option value="1">پیشنهاد بیلیتو</option>
            <option value="2">گران‌ترین</option>
            <option value='3'>سریع‌ترین</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            {/* You might want to import AngleDown and use it here */}
            <FaChevronDown />
          </div>
        </div>
        
      </form>
    </div>
  );
};

export default MyFormComponent;
