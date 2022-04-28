import React, { useEffect, useState } from "react";
import "./styles.css";

import { LinkIcon } from "@heroicons/react/outline";
import Htext from "./components/Htext";

import Href from "./components/Href";
import _ from "underscore";
import { DataGrid } from "@mui/x-data-grid";
import { DataGridPro } from "@mui/x-data-grid-pro";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Typography } from "@mui/material";

import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Link } from "react-router-dom";

import Download from "../Scores/components/Download";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "react-pro-sidebar/dist/css/styles.css";
import { NavLink } from "react-router-dom";
import ScoresHtext from "./components/ScoresHtext";
import Sumary from "../Scores/components/Sumary";

import data from "./data/metabolon_plot.json";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function Applications() {
  const [f, setFiltredRows] = useState([]);
  const [r, setRows] = useState([]);

  const names = data.map((e) => {
    return e.name;
  });

  const columns = names.map((e) => {
    if (e !== "Download") {
      return {
        field: e,
        align: "center",
        headerAlign: "center",
        headerName: e,
        width: 250,
      };
    } else {
      return {
        field: e,
        align: "center",
        headerAlign: "center",
        headerName: e,
        width: 250,
        renderCell: (params) => {
          return (
            <a href={params.value}>
              <CloudDownloadIcon className="text-indigo-600" />{" "}
            </a>
          );
        },
      };
    }
  });

  useEffect(() => {
    const rowsBefore = data.map((e) => {
      let val = Object.values(e.data);

      console.log("the link is", val[val.length - 1]);
      return val;
    });

    const rowsAfter = _.zip.apply(_, rowsBefore);

    var rows = [];
    var l = 0;
    rowsAfter.map((e) => {
      // e[e.length - 1] = <a href={e[e.length - 1]}>Link</a>;

      let obj = {};
      obj["id"] = l;
      l++;
      for (var i = 0, c = names[0]; i < e.length; i++, c = names[i]) {
        obj[c] = e[i];
      }
      rows.push(obj);
      obj = {};
    });

    setRows(rows);
    setFiltredRows(rows);
  }, [data]);

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const dt = [
    {
      title: "Number of phenotypes: ",
      type: "Text",
      value: "1123",
    },
    {
      title: " Cohort: ",
      type: "Text",
      value: " UK Biobank",
    },
    {
      title: "  Ancestry: ",
      type: "Text",
      value: " White British",
    },
    {
      title: "Testing Model for disease: ",
      type: "Text",
      value:
        " Age as the time scale Cox regression models (y ~ omics genetic score* + strat(sex) + genotyping array + 10PCs)",
    },
    {
      title: " Selection criterion: ",
      type: "Text",
      value: " FDR-adjusted p-value < 0.05",
    },
  ];

  /** 
  <Htext text="Sumarry" />
         
           
    
    


  

            <div className="w-full float-left pr-12">
              <h1 className="text-sm text-gray-600 text-justify">
                * Only traits that had a r2 {" > "}0.01 in internal validation
                were considerred in the association tests.
              </h1>
            </div>
         
            <div>
                    <Htext text="Download" ></Htext>
                    <div className="w-full">
                        <div className="w-[50%] h-[100px] shadow-sm">

                        </div>
                    </div>
           </div>


*/

  const handleSearch = (event) => {
    let value = event.target.value.toUpperCase();

    let result = [];
    result = r.filter((d) => {
      return Object.values(d).join("").toUpperCase().includes(value) !== false;
    });

    console.log(result);

    if (event.target.value.length === 0) {
      result = r;
    }
    setFiltredRows(result);
  };

  return (
    <div>
      <div className=" w-full mt-[80px]">
        <div className=" lg:flex block w-screen bg-white absolute">
          <div
            id="leftpanel"
            className="lg:w-[20%] overflow-y-scroll w-screen  lg:shadow-none  lg:h-screen overflow-hidden bg-white   border-r border-slate-300 "
          >
            <NavLink to={"/Scores"}>
              <ScoresHtext text="Scores" />
            </NavLink>
            <div className="bg-white w-full">
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
                    <Sumary data={dt}></Sumary>
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
                  <div></div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>

          <div className="h-auto w-full lg:w-[80%] py-0 my-0">
            <div className="pl-5">
              <Htext text="Explore and download identified associations in the PheWAS with multi-omic genetic scores in UKB" />
            </div>
            <div className="w-full h-auto lg:px-12">
              <div className="w-full h-[600px] p-4 rounded-md   my-5 mr-5">
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 700,
                  }}
                  className="mt-8 mb-2 shadow-none max-w-[90%] w-[400px]"
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Find your row quickly"
                    onChange={(e) => handleSearch(e)}
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                  <IconButton
                    type="submit"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>

                <DataGrid
                  rows={f}
                  columns={columns}
                  pageSize={40}
                  rowsPerPageOptions={[10]}
                  align="center"
                  checkboxSelection
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
