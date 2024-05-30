import React from "react";
import post from "../../assets/post.svg";
import post_write from "../../assets/post_write.svg";
import post_search from "../../assets/post_search.svg";
import profile from "../../assets/profile.svg";
import profile_detail from "../../assets/profile_detail.svg";
import thanks from "../../assets/thanks.svg";

const Works = () => {
  return (
    <section className="flex flex-col items-center px-16 pt-6 pb-20 mt-32 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <header className="flex flex-col mb-2 w-full max-w-[1200px] max-md:max-w-full">
        <h1 className="justify-center self-center text-4xl font-bold leading-10 text-center text-neutral-800">
          How it works?
        </h1>
        <p className="self-center mt-11 text-lg leading-7 text-center text-black w-[839px] max-md:mt-10 max-md:max-w-full">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
      </header>
      <section className="mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col grow justify-center items-center px-14 py-10 w-full text-xl font-medium leading-7 text-center text-black bg-cyan-50">
            <img
              loading="lazy"
              src={profile}
              className="self-center aspect-square w-[75px]"
              alt=""
            />
            <p className="mt-6">Select Your Role and Sign Up</p>
          </div>
          <div className="flex flex-col grow justify-center items-center px-14 py-10 w-full text-xl font-medium leading-7 text-center text-black bg-white">
            <img
              loading="lazy"
              src={post}
              className="self-center aspect-square w-[75px]"
              alt=""
            />
            <p className="mt-6">Buyers Post Your Requirements</p>
          </div>
          <div className="flex flex-col grow justify-center items-center px-14 py-10 w-full text-xl font-medium leading-7 text-center text-black bg-cyan-50">
            <img
              loading="lazy"
              src={post_search}
              className="self-center aspect-square w-[75px]"
              alt=""
            />
            <p className="mt-6">
              Review, Select, and Contact the Best Suppliers
            </p>
          </div>
        </div>
      </section>
      <section className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col grow justify-center items-center px-14 py-10 w-full text-xl font-medium leading-7 text-center text-black bg-white">
            <img
              loading="lazy"
              src={profile_detail}
              className="self-center aspect-square w-[75px]"
              alt=""
            />
            <p className="mt-6">
              Suppliers Complete your profile and get notified for opportunities
            </p>
          </div>
          <div className="flex flex-col grow justify-center items-center px-14 py-10 w-full text-xl font-medium leading-7 text-center text-black bg-cyan-50">
            <img
              loading="lazy"
              src={post_write}
              className="self-center aspect-square w-[75px]"
              alt=""
            />
            <p className="mt-6">
              Contact to Buyers and Share your Quote for the service
            </p>
          </div>
          <div className="flex flex-col grow justify-center items-center px-14 py-10 w-full text-xl font-medium leading-7 text-center text-black bg-white">
            <img
              loading="lazy"
              src={thanks}
              className="self-center aspect-square w-[75px]"
              alt=""
            />
            <p className="mt-6">
              Both the Parties can Connect and Make Business Leave a Feedback
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Works;
