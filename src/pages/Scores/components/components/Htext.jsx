import React from "react";

import FlashOnIcon from "@mui/icons-material/FlashOn";

export default function Htext(props) {
  return (
    <div className="py-6 w-full float-left">
      <h1
        style={{ fontFamily: "Poppins" }}
        className="text-md text-justify pl-3 lg:pl-12  tracking-tight font-extrabold font-sans text-gray-900 sm:text-xl md:text-xl"
      >
        <span className=" text-indigo-600 inline">
          <FlashOnIcon className="mx-1"></FlashOnIcon>
        </span>
        {props.text}
      </h1>
    </div>
  );
}
