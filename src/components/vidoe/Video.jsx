import React, { useState } from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex justify-center items-center mt-0 mb-1 min-h-screen">
      <div className="flex flex-col justify-center items-center px-8 py-20 mt-2 max-w-full rounded-md bg-sky-950 w-full md:w-4/5 lg:w-[1510px] max-md:px-5 max-md:mt-10 min-h-[350px]">
        <header className="mt-1 mb-7 ml-3 max-md:mt-10 max-md:max-w-full">
          <section className="flex gap-5 max-md:flex-col max-md:gap-0">
            <figure className="flex flex-col w-full h-full max-md:ml-0 max-md:w-full">
              <div
                className="flex overflow-hidden w-full h-[20rem] md:w-[35rem] lg:w-[55rem] lg:h-[25rem] relative flex-col grow justify-center items-center px-1 py-2 max-md:px-5 max-md:mt-10 max-md:max-w-full cursor-pointer"
                onClick={openModal}
              >
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=IZLp-TZyDkQ"
                  playing={isModalOpen}
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
            </figure>
            <aside className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
              <nav className="flex flex-col mt-4 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 items-start text-2xl font-bold leading-8 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col text-red-400 flex-1">
                    <div className="self-center">Buyer</div>
                    <div className="shrink-0 mt-3 h-1 bg-red-400 rounded-sm" />
                  </div>
                  <div className="text-white flex-auto">Supplier</div>
                </div>
                <div className="flex gap-2.5 mt-12 max-md:flex-wrap max-md:mt-10">
                  <div className="flex-auto text-xl font-medium leading-10 text-white max-md:max-w-full">
                    1. Post your requirements.
                    <br />
                    2. Sit back for multiple suppliers to contact you.
                    <br />
                    3. Choose among the suppliers based on the ratings and
                    reviews.
                  </div>
                </div>
              </nav>
            </aside>
          </section>
        </header>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
              <div className="mt-4">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=IZLp-TZyDkQ"
                  playing
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;
