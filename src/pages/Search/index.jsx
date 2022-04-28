import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";



import {about} from "./data/about";
import {home} from "./data/home";

import {Iscore} from "./data/score_Illumina RNAseq";
import {Mscore} from "./data/score_metabolon";
import {Nscore} from "./data/score_nightingale";
import {Oscore} from "./data/score_olink";
import {Sscore} from "./data/score_somalogic";

import {scores} from "./data/scores";

import {cohorot} from "./data/cohorots";
import {application} from "./data/applications";
import {faq} from "./data/faq";


export default function Find() {
  var data = [
    {
      title: "Home",
      link: "/",
      text: home
    },
    {
      title: "Scores",
      link: "/Scores",
      text: scores,

    },
    {
      title: "Scores Somalogic",
      link: "/Scores/Somalogic",
      text: Sscore,
    },
    {
      title: "Scores Olink",
      link: "/Scores/Olink",
      text: Oscore,
    },
    {
      title: "Scores Metabolon",
      link: "/Scores/Metabolon",
      text: Mscore,
    },
    {
      title: "Scores RNAseq",
      link: "/Scores/Illumina_RNAseq",
      text: Iscore ,
    },
    {
      title: "Scores Nightingale",
      link: "/Scores/Nightingale",
      text: Nscore,
    },

    {
      title: "Applications",
      link: "/Applications",
      text: application,
    },
    {
      title: "FAQs",
      link: "/FAQs",
      text: faq
    },
    {
      title: "Cohorts",
      link: "/Cohorts",
      text: cohorot
    },
    {
      title: "About",
      link: "/About",
      text: about
    },
  ];



  const [filteredData, setFilteredData] = React.useState(data);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = data.filter((d) => {
      return d.text.toLowerCase().search(value) !== -1;
    });
    setFilteredData(result);

    
  };
  return (
    <div className=" w-screen h-screen overflow-scroll pt-[100px]">
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
        className="m-auto my-8"
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          onChange={(e) => handleSearch(e)}
          placeholder="where is my page ?"
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Paper>
      <div className="w-full grid place-items-center ">
      


      {filteredData.map((e) => {
          return (
            <div className="shadow-sm rounded-md p-2 px-5 w-[90%] lg:w-[50%] my-2 ">
              <a href={e.link} className="text-indigo-600 font-bold">{e.title}</a>
              <h1 className="text-gray-400 line-clamp-5">  {e.text}</h1>
            </div>
          );
        })}

      </div>
    </div>
  );
}
