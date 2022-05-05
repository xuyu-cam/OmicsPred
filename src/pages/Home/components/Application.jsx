import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Htext from "./components/Htext";

import logo from "../../../Assets/landing.jpg";
import rna_img from "../../../Assets/rna.png";
import soma_img from "../../../Assets/Somalogic.png";
import ukb_img from "../../../Assets/ukb.png";
import reactome_img from "../../../Assets/Reactome.png";

import meta_img from "../../../Assets/Metabolon.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import FlashOnIcon from "@mui/icons-material/FlashOn";

import Href from "./components/Href";

function Slide(props) {
  return (
    <div className="w-[100%] block md:flex  h-auto rounded-md">
      <div className="w-full md:w-[30%] md:ml-24 max-h-[220px] grid place-items-center md:order-2 order-2 rounded-md shadow-md bg-white mb-4 ">
        <img className="w-[80%] h-[90%] " src={props.logo} />
      </div>

      <div className="w-full md:w-[60%]   rounded grid place-items-center  text-left order-1  md:order-1 ">
        <div className="w-[95%]  rounded   text-left">
          <h1 className=" text-md tracking-tight font-bold font-sans text-indigo-600 sm:text-xl md:text-2xl w-[95%] text-left uppercase">
            A Phenome-wide association analysis in UK biobank
          </h1>
          <h6 className="text:sm py-0 my-0  xl:inline text-gray-600 w-[95%] text-md text-left">
            Genetic scores in OMICSPRED have been applied to{""}
            <Href text="UK biobank" href="https://www.ukbiobank.ac.uk/"></Href>{" "}
            to test for associations with complex phenotypes.
          </h6>

          <a
            href="/Applications"
            className=" max-w-fit mt-3 flex items-center justify-center px-4 py-2 text-indigo-700 bg-indigo-100  text-base font-medium rounded-md border-2  md:py-2 md:text-lg md:px-4"
          >
            <ChevronRightIcon />
            Learn more
          </a>
        </div>
        <div className=" w-full pl-9 mt-2 place-items-start grid"></div>
      </div>
    </div>

  );
}



function Slide1(props) {
  return (
    <div className="w-[100%] block md:flex  h-auto rounded-md">
      <div className="w-full md:w-[30%] md:ml-24 max-h-[220px] grid place-items-center md:order-2 order-2 rounded-md shadow-md bg-white mb-4 ">
        <img className="w-[80%] h-[90%] " src={props.logo} />
      </div>

      <div className="w-full md:w-[60%]   rounded grid place-items-center  text-left order-1  md:order-1 ">
        <div className="w-[95%]  rounded   text-left">
          <h1 className=" text-md tracking-tight font-bold font-sans text-indigo-600 sm:text-xl md:text-2xl w-[95%] text-left uppercase">
            Quantifying genetic control of pathways
          </h1>
          <h6 className="text:sm py-0 my-0  xl:inline text-gray-600 w-[100%] text-md text-left">
            Genetic scores for proteomics were applied to assess the extent to which biological pathways are genetically controlled using data at{""}
            <Href text="Reactome" href="https://reactome.org/"></Href>{"."}

          </h6>

          <a
            href="/Applications/pathway"
            className=" max-w-fit mt-3 flex items-center justify-center px-4 py-2 text-indigo-700 bg-indigo-100  text-base font-medium rounded-md border-2  md:py-2 md:text-lg md:px-4"
          >
            <ChevronRightIcon />
            Learn more
          </a>
        </div>
        <div className=" w-full pl-9 mt-2 place-items-start grid"></div>
      </div>
    </div>

  );
}

const Application = () => {
  return (
    <div className="w-screen bg-slate-100 px-[5%] mt-[20px] h-auto">
      <div className="py-10 w-full float-left grid place-items-center">
        <h1
          style={{ "font-family": "Poppins", fontWeight: "1000px" }}
          className="text-xl pl-0 tracking-tight font-extrabold font-sans text-gray-900 sm:text-4xl md:text-3xl"
        >
          <span className=" text-indigo-600 inline">
            <FlashOnIcon className="mx-2"></FlashOnIcon>
          </span>
          Application of Multi-Omic Genetic Scores
        </h1>
      </div>

      <div className="mySwiper py-[50px] my-[20px] overflow-visible rounded-sm">
        <Slide
          logo={ukb_img}
          text="Proteomics (plasma)"
          discription=""
        />
        <br />
        <br />
        <br />
        <Slide1
          logo={reactome_img}
          text="Proteomics (plasma)"
          discription=""
        />
      </div>
    </div>
  );
};
export default Application;
