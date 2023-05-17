import React from "react";
import { Swiper, SwiperSlide as div } from "swiper/react";
import Slide from "./components/Slide";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import Htext from "./components/Htext";

import logo from "../../../Assets/landing.jpg";
import rna_img from "../../../Assets/rna.png";
import soma_img from "../../../Assets/Somalogic.png";
import olink_img from "../../../Assets/Olink.png";

import meta_img from "../../../Assets/Metabolon.png";
import night_img from "../../../Assets/Nightingale.png";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import Href from "./components/Href";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const Platforms = () => {
  return (
    <div className="w-screen bg-white py-[10px] grid place-items-center">
      <div className="pt-10 w-full float-left grid place-items-center">
    
        <h1
          style={{ "font-family": "Poppins", fontWeight: "1000px" }}
          className="text-xl pl-0 tracking-tight font-extrabold font-sans text-gray-900 sm:text-4xl md:text-3xl mt-8"
        >
          <span className=" text-indigo-600 inline">
            <FlashOnIcon className="mx-2"></FlashOnIcon>
          </span>
          Platforms with Genetic Scores
        </h1>
      </div>

      <div className="w-screen py-5  grid lg:place-items-center  ">
        <div className="w-full flex lg:place-items-center lg:place-content-center md:overflow-x-hidden overflow-x-scroll">
          <div className="min-w-[345px] h-[100%] px-5 md:float-left p-6 ">
            <Slide
              logo={soma_img}
              text="Proteomics (plasma) "
              href="/Scores/Somalogic/INTERVAL"
              discription={
                <div>
                  {" "}
                  2,384 protein genetic scores, validated on the{" "}
                  <Href
                    text="FENLAND"
                    href="https://www.mrc-epid.cam.ac.uk/research/studies/fenland/"
                  ></Href>{""}
                  ,
                  <Href
                    text="MEC"
                    href="https://blog.nus.edu.sg/sphs/"
                  ></Href>{" "}
                  and
                  <Href
                    text="JHS"
                    href="https://www.jacksonheartstudy.org/"
                  ></Href>{" cohorts"}

                  <br />
                </div>
              }
            />
          </div>
          <div className="min-w-[345px] h-[100%] flex-grow-0 px-5 float-left  p-6">
            {" "}
            <Slide
              logo={olink_img}
              href="/Scores/Olink/INTERVAL"
              text="Proteomics (plasma)"
              discription={
                <div>
                  308 protein genetic scores, validated on the{" "}
                  <Href
                    text="NSPHS"
                    href="https://pubmed.ncbi.nlm.nih.gov/20568910/"
                  ></Href>{" "}
                  and{""}
                  <Href
                    text="ORCADES"
                    href="https://www.ed.ac.uk/viking/about-us/what-we-do/our-studies"
                  ></Href>{" cohorts"}
                </div>
              }
            />
          </div>
          <div className="min-w-[345px] h-[100%] flex-grow-0 px-5 float-left  p-6 ">
            {" "}
            <Slide
              logo={meta_img}
              href="/Scores/Metabolon/INTERVAL"
              text="Metabolomics (plasma)"
              discription={
                <div>
                  726 metabolite genetic scores, validated on a withheld subset
                  of INTERVAL and{" "}
                  <Href
                    text="ORCADES cohort"
                    href="https://www.ed.ac.uk/viking/about-us/what-we-do/our-studies"
                  ></Href>{" "}
                
                </div>
              }
            />{" "}
          </div>
        </div>

        <div className="w-full flex lg:place-items-center lg:place-content-center md:overflow-x-hidden  overflow-x-scroll">
          <div className="min-w-[345px] h-[100%] flex-grow-0  px-5 float-left  p-6 ">
            {" "}
            <Slide
              logo={night_img}
              text="Metabolomics (serum)"
              href="Scores/nightingale/INTERVAL"
              discription={
                <div>
                   Genetic scores for 141 metabolic traits, validated on{" "}
                  <Href
                    text="UK Biobank"
                    href="https://www.ukbiobank.ac.uk/"
                  ></Href>{""}
                  ,{" "}
                  <Href
                    text="ORCADES"
                    href="https://www.ed.ac.uk/viking/about-us/what-we-do/our-studies"
                  ></Href>{" "}
                  and{""}
                  <Href
                    text="VIKING"
                    href="https://www.ed.ac.uk/viking/about-us/what-we-do/our-studies"
                  ></Href>{" cohorts"}
                </div>
              }
            />
          </div>
          <div className="min-w-[345px] h-[100%] flex-grow-0  px-5 float-left  p-6 ">
            {" "}
            <Slide
              href="Scores/Illumina_RNAseq/INTERVAL"
              logo={rna_img}
              text="Transcriptomics (whole blood)"
              discription="13,668 gene expression genetic scores, validated on a withheld subset of INTERVAL."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Platforms;
