import React from "react";

import DPHPC from "..//..//..//Assets/sponsors/DPHPC.png";
import HDRuk from "..//..//..//Assets/sponsors/HDRuk.png";
import Baker from "..//..//..//Assets/sponsors/Baker.png";
import Htext from "./components/Htext";
import FlashOnIcon from "@mui/icons-material/FlashOn";
export default function Sponsors() {
  return (
    <div className="w-screen bg-white px-[5%] py-[20px] overflow-visible">
   


      <div className="py-10 w-full float-left grid place-items-center">
        <h1
          style={{ "font-family": "Poppins", fontWeight: "1000px" }}
          className="text-xl pl-0 tracking-tight font-extrabold font-sans text-gray-900 sm:text-4xl md:text-3xl"
        >
          <span className=" text-indigo-600 inline">
            <FlashOnIcon className="mx-2"></FlashOnIcon>
          </span>
         Supported by
        </h1>
      </div>


      <div className=" pb-[50px] my-[20px] px-[20px] flex space-x-5  md:place-items-center place-content-center md:overflow-x-auto overflow-x-scroll ">
        <a href="https://www.phpc.cam.ac.uk/">
          <img
            style={{
              "box-shadow": " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "15px",
              borderRadius: "10px",
              float: "left",
            }}
            className="h-[100px] min-w-auto mr-10 mb-10"
            src={DPHPC}
          />
        </a>
        <a href="https://www.hdruk.ac.uk/">
          <img
            style={{
              "box-shadow": " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "15px",
              borderRadius: "10px",
              float: "left",
            }}
            className="h-[100px] mr-10 mb-10"
            src={HDRuk}
          />
        </a>
        <a href="https://baker.edu.au/">
          <img
            style={{
              "box-shadow": " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "15px",
              borderRadius: "10px",
              float: "left",
            }}
            className="h-[100px] mr-10 mb-10"
            src={Baker}
          />
        </a>
      </div>
    </div>
  );
}
