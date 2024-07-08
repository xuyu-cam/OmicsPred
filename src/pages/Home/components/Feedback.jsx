import React from "react";

import FlashOnIcon from "@mui/icons-material/FlashOn";

import Href from "./components/Href";

const Feedback = () => {
  return (
    <div className="w-screen bg-slate-100 px-[5%] pb-6">
      <div className="py-10 w-full float-left grid place-items-center">
        <h1
          style={{ fontFamily: "Poppins", fontWeight: "900" }}
          className="text-xl pl-0 tracking-tight font-extrabold font-sans text-gray-900 sm:text-4xl md:text-3xl"
        >
          <span className=" text-indigo-600 inline">
            <FlashOnIcon className="mx-2"></FlashOnIcon>
          </span>
          Questions and Feedback
        </h1>
      </div>
      <div
        style={{ width: "100%" }}
        className="mySwiper w-[100%] overflow-visible rounded-sm"
      >
        <p className="mt-3 w-[100%] text-base text-gray-500 sm:mt-5 sm:text-lg sm:w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0">
          We would love to hear from you! To provide feedback or ask a question,
          you can contact the OMICSPRED team{" "}
          <Href text="here" href="mailto:omicspred@gmail.com" /> .
        </p>
      </div>
    </div>
  );
};
export default Feedback;
