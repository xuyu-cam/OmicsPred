import React, { useState, useEffect } from "react";
import Sumary from "./components/Sumary";
import Download from "./components/Download";
import Validation from "./components/Validation";
import Explore from "./components/Explore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScoresSideBar from "./components/ScoresSideBar";
import ScoresHome from "./components/Scores";

import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";

import RoutesData from "./RoutesData";
import { NavLink, Link } from "react-router-dom";
import { BiSubdirectoryRight } from "react-icons/bi";
import {TbDirectionHorizontal} from "react-icons/tb";

export function Scores(props) {
  const [open, setOpen] = useState(true);
  const [leftpanel, setLeftpanel] = useState("lg:w-[20vw]");
  const [pl, setPl] = useState("lg:pl-[20vw]");
  const [rightpanel, setRightpanel] = useState(" w-[100vw] lg:w-[80vw]");
  const [icon, setIcon] = useState("right-12 mr-[-50px] ");

  const handlefold = () => {
    if (open) {
      setLeftpanel("lg:w-0");
      setPl("lg:pl-0");
      setRightpanel("w-screen");
      setOpen(false);
      setIcon("right-12 mr-[-100px] p-5 shadow-lg");
    } else {
      setLeftpanel("lg:w-[20vw]");
      setPl("lg:pl-[20vw]");
      setRightpanel("w-[80vw] ");
      setOpen(true);
      setIcon("right-12 mr-[-50px] shadow-none");
    }
  };

  return (
    <>
      <div style={{ flex: "1 1 auto" }} className=" flex-col w-screen ">
        <div className=" nav overflow-x-scroll w-full pl-2  h-auto bg-white shadow-sm pt-[38px] fixed z-50 mt-[50px]">
          <div className="w-full  h-[50px] w-full flex space-x-5 border-b-2 border-slate-300">
            <h1 className="min-w-auto px-2 h-[80px]">
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "text-indigo-600 py-4 h-[80px] "
                    : "text-slate-800 h-full  py-4";
                }}
                reloadDocument
                to="/Scores/Somalogic/INTERVAL"
              >
                Proteomics (Somalogic)
              </NavLink>{" "}
            </h1>
            <h1 className="min-w-auto px-2 h-[80px]">
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "text-indigo-600 py-4 h-[80px]"
                    : "text-slate-800  py-4";
                }}
                reloadDocument
                to="/Scores/Olink/INTERVAL"
              >
                Proteomics (Olink)
              </NavLink>{" "}
            </h1>
            <h1 className="min-w-auto px-2 h-[80px]">
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "text-indigo-600 py-4 h-[80px]"
                    : "text-slate-800  py-4";
                }}
                reloadDocument
                to="/Scores/Metabolon/INTERVAL"
              >
                Metabolomics (Metabolon)
              </NavLink>{" "}
            </h1>
            <h1 className="min-w-auto px-2 h-[80px]">
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "text-indigo-600 py-4 h-[80px]"
                    : "text-slate-800  py-4";
                }}
                reloadDocument
                to="/Scores/Nightingale/INTERVAL"
              >
                {" "}
                Metabolomics (Nightingale)
              </NavLink>{" "}
            </h1>
            <h1 className="min-w-auto px-2 h-[80px]">
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "text-indigo-600 py-4 h-[80px]"
                    : "text-slate-800  py-4";
                }}
                reloadDocument
                to="/Scores/Illumina_RNAseq/INTERVAL"
              >
                Transcriptomics (Illumina RNAseq)
              </NavLink>{" "}
            </h1>
          </div>

          {props.name !== "Scores" ? (
            <div className="w-full  h-[50px] w-full flex space-x-5 ">
              <div className="h-full w-[50px] grid place-items-center">
                <TbDirectionHorizontal
                  fontSize={"40px"}
                  className="text-indigo-500"
                />
              </div>
              <h1 className="min-w-auto px-2 h-[80px] grid place-items-center">
                <NavLink
                  className={({ isActive }) => {
                    return isActive
                      ? "text-indigo-600 h-[80px] py-[14px] text-center "
                      : "text-slate-800 h-full h-[80px] py-3";
                  }}
                  reloadDocument
                  to={props.page}
                >
                     INTERVAL
                </NavLink>{" "}
              </h1>
            </div>
          ) : null}
        </div>

        <div className=" lg:flex block w-screen bg-white  absolute mt-[180px]">
          {props.name !== "Scores" ? (
            <div
              id="leftpanel"
              className={
                "w-screen   lg:shadow-none  lg:max-h-screen pb-[130px]  bg-white lg:fixed transition-all ease-in-out delay-0 " +
                leftpanel
              }
            >
              <ScoresSideBar
                icon={icon}
                handlefold={handlefold}
                name={props.name}
                data={RoutesData[props.name].plot_data}
              />
            </div>
          ) : null}

          {props.name == "Scores" ? (
            <>
              <div className="h-screen px-0  grid place-items-center flex-1 bg-white overflow-y-scroll w-screen lg:[90vw] ">
                <div className=" max-w-[100%] w-screen h-[100%] bg-white">
                  <ScoresHome />
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className={"overflow-y-scroll h-[calc(100vh-100px)]  " + pl}
                id="target"
              >
                <div
                  className={
                    "min-h-max px-0  grid place-items-center flex-1  bg-white overflow-y-scroll max-w-[100vw]  border-l border-slate-300 transition-width ease-in-out delay-10  " +
                    rightpanel
                  }
                >
                  <div className=" max-w-[100vw] lg:max-w-[80vw] w-[100vw] h-[100%] bg-white ">
                    <Explore data={RoutesData[props.name].table_data} />
                    <Validation
                      pagename={props.name}
                      tdata={RoutesData[props.name].table_data}
                      data={RoutesData[props.name].plot_data}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}


