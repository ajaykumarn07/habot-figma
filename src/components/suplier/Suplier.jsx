import React from "react";

const Supplier = () => {
  return (
    <section className="flex justify-center items-center px-8 py-20 mt-10 w-full bg-cyan-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 justify-between mt-7 mb-3.5 w-full max-w-[1110px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col my-auto text-4xl font-semibold leading-10 text-black max-md:w-full max-md:mb-5">
          <h1>Let Suppliers Find You</h1>
          <div className="shrink-0 self-end h-1 bg-red-400 w-[159px]" />
        </div>
        <button className="justify-center px-14 py-5 text-lg font-bold leading-6 text-center text-white bg-red-400 rounded-md max-md:px-5">
          Get Verified
        </button>
      </div>
    </section>
  );
};

export default Supplier;
