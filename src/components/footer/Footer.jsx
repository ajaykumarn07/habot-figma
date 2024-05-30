import React from "react";
import hobot_logo from "../../assets/Hobot-removebg-preview.png";
import social_media from "../../assets/social_media.svg";
const Footer = () => {
  return (
    <div className="flex justify-center items-center px-16 py-10 mt-28 w-full text-white  bg-sky-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <section className="flex flex-col pt-8 pb-5 pl-7 w-full border-t border-b border-solid border-white border-opacity-20 max-w-[1200px] max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col grow shrink-0 text-base font-bold leading-6 whitespace-nowrap basis-0 w-fit max-md:max-w-full">
              <img
                loading="lazy"
                src={hobot_logo}
                alt="Company logo"
                className="self-center aspect-[7.14] w-[300px] max-md:max-w-full"
              />
            </div>
            <aside className="flex flex-col self-start text-sm font-light leading-6">
              <h2 className="text-base font-bold leading-6">Company</h2>
              <nav className="mt-6">
                <a href="#">About</a>
              </nav>
              <nav className="mt-3">
                <a href="#">FAQ</a>
              </nav>
            </aside>
            <aside className="flex flex-col self-start text-sm font-light leading-6">
              <h2 className="text-base font-bold leading-6">Terms</h2>
              <nav className="mt-6">
                <a href="#">Data Privacy</a>
              </nav>
              <nav className="mt-3">
                <a href="#">Terms</a>
              </nav>
              <nav className="text-sm leading-6">
                <a href="#">Accessibility</a>
              </nav>
            </aside>
            <aside className="flex flex-col self-start text-sm font-light leading-6">
              <h2 className="text-base font-bold leading-6">Related</h2>
              <nav className="mt-6">
                <a href="#">Find Buyer</a>
              </nav>
              <nav className="mt-3">
                <a href="#">Feedback</a>
              </nav>
            </aside>
          </div>
          <img
            loading="lazy"
            src={social_media}
            alt="Related visual content"
            className="shrink-0 my-auto w-52 max-w-full aspect-[5.26]"
          />
        </div>
        <footer className="flex gap-5 justify-between mt-2 max-w-full font-light w-[472px] max-md:flex-wrap">
          <div className="text-base leading-8">© AjayKumar</div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
