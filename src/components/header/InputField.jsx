import React from "react";

const InputField = ({ altText, src, labelText, inputId }) => (
  <div className="flex flex-col justify-center px-4 py-2 bg-white rounded-md border border-gray-300 border-solid w-full md:w-auto">
    <div className="flex gap-4 py-2.5 bg-white">
      <img
        loading="lazy"
        src={src}
        alt={altText}
        className="shrink-0 aspect-square w-[21px]"
      />
      <label htmlFor={inputId} className="sr-only">
        {labelText}
      </label>
      <input
        type="text"
        id={inputId}
        placeholder={labelText}
        className="grow justify-center border-none self-start mt-1.5 w-full h-[2rem]"
        aria-label={labelText}
      />
    </div>
  </div>
);

export default InputField;
