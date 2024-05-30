import React, { useEffect, useLayoutEffect, useRef } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
//import  'chartjs-plugin-doughnutlabel';

import { saveAs } from "file-saver";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

ChartJS.register(
  ArcElement,
  Tooltip,
  ChartDataLabels,
  Legend,
  ...registerables
);

export default function CircleChart(props) {
  const options = {
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: props.name_1,
          align: "center",
        },
      },
      y: {
        type: "linear",
        display: false,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: props.name_1,
          align: "center",
        },
      },
      x: {
        display: false,
        title: {
          display: true,
          text: props.name_1,
          align: "center",
        },
      },
    },
    plugins: {
      datalabels: {
        formatter: function (value, context) {
          return value;
        },
        color: "#ffff",
      },
      doughnutlabel: {
        labels: [
          {
            text: "getTotal",
            font: {
              size: "40",
            },
            color: "black",
          },
          {
            text: "Due ≤ 60 Days",
            font: {
              size: "25",
            },
            color: "grey",
          },
        ],
      },
    },
  };

  const lbel =
    props.matrix.substring(1) == "R2" ? "R²" : props.matrix.substring(1);

  var odata2 = Object.values(props.study_2);
  var odata1 = Object.values(props.study_1);

  var data2 = [];
  var data1 = [];

  // Store data points for each study as a dictionary to keep the couple index/values.
  for (let i = 0; i < odata1.length; i++) {
    if (odata2[i] != null && odata2[i] != 'undefined'
      && odata1[i] != null && odata1[i] != 'undefined') {
      data2[i] = odata2[i];
      data1[i] = odata1[i];
    }
  }

  const data = {
    labels: [
      lbel + " ≥ 0.5",

      "  0.3  ≤ " + lbel + " < 0.5",
      "  0.1  ≤ " + lbel + " < 0.3",
      " 0.01 ≤ " + lbel + " <  0.1 ",
      lbel + " < 0.01  ",
    ],

    datasets: [

 {
        label: "# of study 2",
        data: [
          data2.filter((e) => {
            return e >= 0.5;
          }).length,
          data2.filter((e) => {
            return e >= 0.3 && e < 0.5;
          }).length,
          data2.filter((e) => {
            return e >= 0.1 && e < 0.3;
          }).length,

          data2.filter((e) => {
            return e >= 0.01 && e < 0.1;
          }).length,

          data2.filter((e) => {
            return e < 0.01;
          }).length,
        ],
        backgroundColor: [
          "#e7298a",
          "#d95f02",
          "#1b9e77",
          "#7570b3",
          "#bababa",
        ],
        borderColor: ["#ffff"],
        borderWidth: 1,
        yAxisID: "y1",
      },

      {
        label: " of study 1",
        color: "red",
        data: [
          data1.filter((e) => {
            return e >= 0.5;
          }).length,
          data1.filter((e) => {
            return e >= 0.3 && e < 0.5;
          }).length,
          data1.filter((e) => {
            return e >= 0.1 && e < 0.3;
          }).length,

          data1.filter((e) => {
            return e >= 0.01 && e < 0.1;
          }).length,

          data1.filter((e) => {
            return e < 0.01;
          }).length,
        ],
        backgroundColor: [
          "#e7298a",
          "#d95f02",
          "#1b9e77",
          "#7570b3",
          "#bababa",
        ],
        borderColor: ["#ffff"],
        borderWidth: 1,
        yAxisID: "y",
      },

     
    ],
  };

  const ChartRef = useRef();

  useEffect(() => {
    const chart = ChartRef.current;
    const ctx = chart.ctx;
    var width = chart.width;
    var height = chart.height;
    ctx.restore();
    var fontSize = (height / 300).toFixed(2);
    ctx.font = fontSize + "em  sans-serif";
    ctx.textBaseline = "top";
    var text = props.name_1;
    var textX = Math.round((width - ctx.measureText(text).width) / 2);
    var textY = height / 2;
    ctx.fillText(text, textX, textY);
    ctx.save();
    chart.update();
  }, [props.study_1]);

  const convertBase64ToFile = (base64String, fileName) => {
    let arr = base64String.split(",");
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let uint8Array = new Uint8Array(n);
    while (n--) {
      uint8Array[n] = bstr.charCodeAt(n);
    }
    let file = new File([uint8Array], fileName, { type: mime });
    return file;
  };

  const DownloadAsImage = () => {
    const base64Image = ChartRef.current.toBase64Image();
    let fileName = "plot.png";
    let file = convertBase64ToFile(base64Image, fileName);
    saveAs(file, fileName);

    // window.open('data:application/octet-stream;base64,' + base64Image , '_blank' );
  };

  return (
    <>
      <div className="relative h-max w-full">
        {" "}
        <div className="w-full  min-h-full h-full absolute grid place-items-center  left-0 top-0 right-0 bottom-0 font-semibold  z-20 bg-transparent text-slate-800">
          {props.name_1}
        </div>
        <div className="relative">
          <div className="w-full grid place-items-center h-[50px] relative ">
            {props.name_1 + " VS " + props.name_2}
          </div>
          <Doughnut
            className="relative"
            ref={ChartRef}
            plugins={[{}]}
            options={options}
            data={data}
          />
          <h1 className="w-full relative grid place-items-center font-semibold text-slate-800">
            {props.name_2}
          </h1>
        </div>
      </div>
      <div className="w-full grid place-items-center pt-8 ">
        <button
          className="text-white bg-indigo-600 text-sm p-2 px-4 border border-slate-400 rounded-md"
          onClick={DownloadAsImage}
        >
          <FileDownloadIcon className="mr-2"></FileDownloadIcon>
          Export as image{" "}
        </button>
      </div>
    </>
  );
}
