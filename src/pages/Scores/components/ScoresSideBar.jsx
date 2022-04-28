import react, { useState, Suspense } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "react-pro-sidebar/dist/css/styles.css";
import { NavLink } from "react-router-dom";
import ScoresHtext from "./components/ScoresHtext";
import Sumary from "./Sumary";
import RoutesData from "./../RoutesData";
import Download from "./Download";

import MoreIcon from "@mui/icons-material/More";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const ScoreSideBar = (props) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      id="leftpanel"
      className=" overflow-y-scroll max-h-screen mt-[-130px] pt-[150px]"
    >
      <div className="bg-white w-full max-w-full ">
        <div className="w-full h-10 hidden md:block ">
          <div
            className={
              "absolute cursor-pointer p-2 bg-white rounded-r-full " +
              props.icon
            }
          >
            <MenuOpenIcon
              onClick={props.handlefold}
              className={" text-slate-500"}
            />
          </div>
        </div>

        <Accordion
          expanded={expanded === "index1"}
          onChange={handleChange("index1")}
          className="shadow-none"
          sx={{ boxShadow: "none", border: "none" }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ScoresHtext text="Summary" />
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Sumary data={RoutesData[props.name].sumarry_data}></Sumary>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "index2"}
          onChange={handleChange("index2")}
          className="shadow-none"
          sx={{ boxShadow: "none", border: "none" }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ScoresHtext text="Download" />
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Download data={RoutesData[props.name].download_data}></Download>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default ScoreSideBar;
