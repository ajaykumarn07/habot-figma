import React from "react";

import suitcase from "../../assets/suitcase.svg";
import location from "../../assets/location.svg";
import hobotBG from "../../assets/hobotBG.png";
import InputField from "./InputField";

const Header = () => {
  return (
    <div className="flex overflow-hidden relative flex-col items-center px-5 pb-20 w-full min-h-[609px] md:max-w-full">
      <img
        loading="lazy"
        src={hobotBG}
        alt="bg"
        className="object-cover absolute inset-0 w-full h-full"
      />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="relative mt-32 text-6xl font-bold text-center text-white leading-[66px] md:mt-10 md:text-4xl md:leading-[53px]">
          Are You a Supplier? <br />
          <span>Explore Matching Opportunities.</span>
        </h1>
        <form className="flex justify-center relative gap-2.5 mt-10 w-full max-w-[938px] text-base font-light text-gray-500 md:flex-wrap md:mt-10">
          <InputField
            altText="Search icon"
            src={suitcase}
            labelText="Search your required service here"
            inputId="serviceSearch"
          />
          <InputField
            altText="Location icon"
            src={location}
            labelText="Search your desired location here"
            inputId="locationSearch"
          />
          <button
            type="submit"
            className="w-full md:w-auto px-9 py-6 font-bold text-center text-white bg-green-800 rounded-md border border-green-800 leading-[159%] md:px-5"
          >
            Search
          </button>
        </form>
        <div className="relative mt-11 mb-2.5 text-lg font-medium text-center text-white underline md:mt-10">
          <span className="font-bold">Are you a buyer? </span>
          <a href="#" className="underline">
            Click here if you are looking to post a requirements
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
