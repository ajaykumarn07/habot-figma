// import React from "react";
// import Hobot_logo from "../../assets/Hobot-logo.png";
// import arrow from "../../assets/arrow.svg";

// function NavigationItem({ text, children }) {
//   return (
//     <div className="flex gap-2 justify-center text-sm leading-6">
//       <div className="grow">{text}</div>
//       {children}
//     </div>
//   );
// }

// const Navbar = () => {
//   return (
//     <header className="flex relative gap-5 justify-between self-stretch px-16 py-2 w-full bg-white shadow-lg max-md:flex-wrap max-md:px-5 max-md-w-full">
//       <img
//         loading="lazy"
//         src={Hobot_logo}
//         alt="Company logo"
//         className="shrink-0 my-auto max-w-full aspect-[4.17] w-[181px]"
//       />
//       <nav className="flex gap-5 justify-end pl-16 max-md:flex-wrap">
//         <div className="flex flex-auto gap-5 justify-end py-7 pr-2.5 pl-10 text-neutral-500 max-md:pl-5">
//           <p className="justify-center self-start text-base leading-6">
//             Find Suppliers
//           </p>
//           <NavigationItem text="Find Service Tags">
//             <img
//               loading="lazy"
//               src={arrow}
//               alt=""
//               className="shrink-0 self-start w-4 aspect-square cursor-pointer"
//             />
//           </NavigationItem>
//         </div>
//         <button
//           className="justify-center px-11 py-5 my-auto text-base font-bold leading-6 text-center text-green-800 rounded-md border border-green-800 border-solid max-md:px-5 hover:bg-green-300"
//           tabIndex="0"
//         >
//           Login / Sign Up
//         </button>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React from "react";
import Hobot_logo from "../../assets/Hobot-logo.png";
import arrow from "../../assets/arrow.svg";

function NavigationItem({ text, children }) {
  return (
    <div className="flex gap-2 justify-center text-sm leading-6">
      <div className="grow">{text}</div>
      {children}
    </div>
  );
}

const Navbar = () => {
  return (
    <header className="flex relative gap-5 justify-between items-center px-6 py-2 w-full bg-white shadow-lg md:flex-wrap md:px-5">
      <img
        loading="lazy"
        src={Hobot_logo}
        alt="Company logo"
        className="shrink-0 my-auto max-w-full aspect-[4.17] w-36 md:w-28"
      />
      <nav className="flex gap-5 justify-end flex-1 items-center pl-4 md:flex-wrap md:pl-0">
        <div className="flex flex-auto gap-5 justify-end items-center py-4 text-neutral-500 md:py-2 md:pl-0">
          <p className="text-base leading-6">Find Suppliers</p>
          <NavigationItem text="Find Service Tags">
            <img
              loading="lazy"
              src={arrow}
              alt=""
              className="shrink-0 self-start w-4 aspect-square cursor-pointer"
            />
          </NavigationItem>
        </div>
        <button
          className="px-6 py-2 my-auto text-base font-bold leading-6 text-center text-green-800 rounded-md border border-green-800 border-solid md:px-4 hover:bg-green-300"
          tabIndex="0"
        >
          Login / Sign Up
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
