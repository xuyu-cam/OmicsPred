import react from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";

import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Footer from "../../Home/components/Footer";

import { NavLink } from "react-router-dom";

import ScoresHtext from "./components/ScoresHtext";
const pages = [
  "SOMALOGIC",
  "OLINK",
  "METABOLON",
  "Nightingale",
  "ILLUMINA_RNASEQ",
];
const ScoreSideBar = () => {
  const activestyle = {
    color: "blue",
  };
  return (
    <div className="lg:w-[20%] w-screen pt-[100px] h-[20%] lg:shadow-none shadow-md lg:h-screen overflow-hidden bg-white   border-r border-slate-300">
      <NavLink to={"/Scores"}>
        <ScoresHtext text="Scores" />
      </NavLink>

      <div className="bg-white w-full">
        <div className="mx-3 p-2 rounded bg-white  flex cursor-pointer hover:bg-indigo-600  group ">
          <ChevronRightIcon className="w-10 h-10 ml-2 mt-2 text-indigo-600 group-hover:text-white" />
          <NavLink
            to={"/Scores/Somalogic"}
            reloadDocument
            style={({ isActive }) => (isActive ? activestyle : {})}
            className=" pt-3 text-slate-800  text-[12px]  pl-2 py-2 group-hover:text-white"
          >
            Proteomics (Somalogic)
          </NavLink>
        </div>

        <div className="mx-3 p-2 rounded bg-white  flex cursor-pointer hover:bg-indigo-600  group ">
          <ChevronRightIcon className="w-10 h-10 ml-2 mt-2 text-indigo-600 group-hover:text-white" />
          <NavLink
            to={"/Scores/Olink"}
            reloadDocument
            style={({ isActive }) => (isActive ? activestyle : {})}
            className=" pt-3 text-slate-800  text-[12px]  pl-2 py-2 group-hover:text-white"
          >
            Proteomics (Olink)
          </NavLink>
        </div>

        <div className="mx-3 p-2 rounded bg-white  flex cursor-pointer hover:bg-indigo-600  group ">
          <ChevronRightIcon className="w-10 h-10 ml-2 mt-2 text-indigo-600 group-hover:text-white" />
          <NavLink
            to={"/Scores/Metabolon"}
            reloadDocument
            style={({ isActive }) => (isActive ? activestyle : {})}
            className=" pt-3 text-slate-800  text-[12px]  pl-2 py-2 group-hover:text-white"
          >
            Metabolomics (Metabolon)
          </NavLink>
        </div>

        <div className="mx-3 p-2 rounded bg-white  flex cursor-pointer hover:bg-indigo-600  group ">
          <ChevronRightIcon className="w-10 h-10 ml-2 mt-2 text-indigo-600 group-hover:text-white" />
          <NavLink
            to={"/Scores/Nightingale"}
            reloadDocument
            style={({ isActive }) => (isActive ? activestyle : {})}
            className=" pt-3 text-slate-800  text-[12px]  pl-2 py-2 group-hover:text-white"
          >
            Metabolomics (Nightingale)
          </NavLink>
        </div>

        <div className="mx-3 p-2 rounded bg-white  flex cursor-pointer hover:bg-indigo-600  group ">
          <ChevronRightIcon className="w-10 h-10 ml-2 mt-2 text-indigo-600 group-hover:text-white" />
          <NavLink
            to={"/Scores/Illumina_RNAseq"}
            reloadDocument
            style={({ isActive }) => (isActive ? activestyle : {})}
            className=" pt-3 text-slate-800  text-[12px]  pl-2 py-2 group-hover:text-white"
          >
            Transcriptomics (Illumina RNAseq)
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ScoreSideBar;