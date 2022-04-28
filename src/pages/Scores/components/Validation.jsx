import React, { useState, useEffect, Suspense } from "react";

import Htext from "./components/Htext";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

import design from "../../../Assets/graphs/Metabolon_validation.png";

import ChartPlot from "./components/Chart";
import CircleChart from "./components/doughnut";

import Data from "../../../data/toplot/data.json";

const Validation = (props) => {
  return (
    <div className="h-auto w-[96%]">
      <Htext text="Visualize performance of genetic scores" />
      <div className="w-full px-0 lg:px-12 ">
        <Suspense
          fullback={<div className="h-[600px] w-full bg-red-600"></div>}>
          <ChartPlot pagename={props.pagename} tdata={props.tdata} data={props.data} />
        </Suspense>
      </div>
    </div>
  );
};
export default Validation;
