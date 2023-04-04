import React from "react";

import Htext from "./components/Htext";

import FlashOnIcon from "@mui/icons-material/FlashOn";

import Href from "./components/Href";

const NEWS = () => {
  return (
    <div className="w-screen bg-slate-100 px-[5%] pb-6">
      <div className="py-10 w-full float-left grid place-items-center">
        <h1
          style={{ "font-family": "Poppins", fontWeight: "1000px" }}
          className="text-xl pl-0 tracking-tight font-extrabold font-sans text-gray-900 sm:text-4xl md:text-3xl"
        >
          <span className=" text-indigo-600 inline">
            <FlashOnIcon className="mx-2"></FlashOnIcon>
          </span>
          News
        </h1>
      </div>
      <div
        style={{ width: "100%" }}
        className="mySwiper w-[100%] overflow-visible rounded-sm"
      >
        <p className="mt-3 w-[100%] text-base text-blue-800 sm:mt-5 sm:text-xl sm:w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0 text-center">
          <b>MAR-31-2023: The OmicsPred flagship paper was published at Nature!</b> <Href text="Article Link" href="https://www.nature.com/articles/s41586-023-05844-9"/>
  
        </p>
      </div>
    </div>
  );
};
export default NEWS;
