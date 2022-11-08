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

export function Menu({ page }) {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div class="w-48 text-gray-900 bg-white rounded-lg border border-gray-200 ">
        <div
          type="button"
          class="inline-flex relative items-center py-2 px-4 w-full text-lg font-medium rounded-t-lg border-b border-gray-200 "
        >
          <svg
            aria-hidden="true"
            class="mr-2 w-8 h-8 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
          </svg>
          Test Studies
        </div>
        <Link to={"/Scores/" + page + "/INTERVAL"}>
          <button
            type="button"
            class="inline-flex relative items-center py-2 px-4 w-full text-md font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
          >
            INTERVAL
          </button>
        </Link>

        <button
          type="button"
          class="text-slate-400 inline-flex relative items-center py-2 px-4 w-full text-md font-medium rounded-b-lg  "
        >
          <svg
            aria-hidden="true"
            class="mr-2 w-6 h-6 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
              clip-rule="evenodd"
            ></path>
          </svg>
          coming soon
        </button>
      </div>
    </div>
  );
}
