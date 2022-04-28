import React from "react";

import FlashOnIcon from "@mui/icons-material/FlashOn";

export default function Htext(props) {
  return (
    <div className="py-6 w-full float-left">
      <h1
        style={{ "font-family": "Poppins" }}
        className="text-2xl  tracking-tight flex font-extrabold font-sans text-gray-900 sm:text-2xl md:text-3xl"
      >
        <span className="block text-indigo-600">
          <FlashOnIcon className="mx-2"></FlashOnIcon>
        </span>
        {props.text}
      </h1>
    </div>
  );
}
