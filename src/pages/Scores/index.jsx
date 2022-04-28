import React, { useState , useEffect } from "react";
import Sumary from "./components/Sumary";
import Download from "./components/Download";
import Validation from "./components/Validation";
import Explore from "./components/Explore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScoresSideBar from "./components/ScoresSideBar";
import ScoresHome from "./components/Scores";

import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";

import RoutesData from "./RoutesData";
import { NavLink } from "react-router-dom";

export default function Scores(props) {
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
        <div className=" nav overflow-x-scroll w-full pl-2 flex h-[80px] bg-white shadow-sm pt-[38px] space-x-5 fixed z-50 mt-[50px]">
          <h1 className="min-w-auto px-2 h-[80px]">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "text-indigo-600 py-4 h-[80px] " : "text-slate-800 h-full  py-4";
              }}
              reloadDocument
              to="/Scores/Somalogic"
            >
              Proteomics (Somalogic)
            </NavLink>{" "}
          </h1>
          <h1 className="min-w-auto px-2 h-[80px]">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "text-indigo-600 py-4 h-[80px]" : "text-slate-800  py-4";
              }}
              reloadDocument
              to="/Scores/Olink"
            >
              Proteomics (Olink)
            </NavLink>{" "}
          </h1>
          <h1 className="min-w-auto px-2 h-[80px]">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "text-indigo-600 py-4 h-[80px]" : "text-slate-800  py-4";
              }}
              reloadDocument
              to="/Scores/Metabolon"
            >
              Metabolomics (Metabolon)
            </NavLink>{" "}
          </h1>
          <h1 className="min-w-auto px-2 h-[80px]">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "text-indigo-600 py-4 h-[80px]" : "text-slate-800  py-4";
              }}
              reloadDocument
              to="/Scores/nightingale"
            >
              {" "}
              Metabolomics (Nightingale)
            </NavLink>{" "}
          </h1>
          <h1 className="min-w-auto px-2 h-[80px]">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "text-indigo-600 py-4 h-[80px]" : "text-slate-800  py-4";
              }}
              reloadDocument
              to="/Scores/Illumina_RNAseq"
            >
              Transcriptomics (Illumina RNAseq)
            </NavLink>{" "}
          </h1>
        </div>

        <div className=" lg:flex block w-screen bg-white  absolute mt-[130px]">
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
              <div className={"overflow-y-scroll h-[calc(100vh-100px)]  " + pl} id="target">
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
