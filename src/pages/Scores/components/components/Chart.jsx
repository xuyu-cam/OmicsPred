import React, {
  Suspense,
  useEffect,
  useState,
  useRef,
} from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";

import FileDownloadIcon from "@mui/icons-material/FileDownload";

import { saveAs } from "file-saver";

import { Chart } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";

import _ from "underscore";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircleChart from "./doughnut";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  annotationPlugin,
  Title,
  Tooltip,
  Legend,
  ...registerables
);

const ChartWithData = (props) => {

  var odata2 = Object.values(props.data_2);
  var odata1 = Object.values(props.data_1);

  var data2 = [];
  var data1 = [];
  var data1_array = [];
  var data2_array = [];

  var counter = 0;

  // Store data points for each study as a dictionary to keep the couple index/values.
  // The index is used to retrieve the metadata from the "tdata" variable.
  for (let i = 0; i < odata1.length; i++) {
    if (odata2[i] != null && odata2[i] != 'undefined'
      && odata1[i] != null && odata1[i] != 'undefined') {
      counter++;
      data2[i] = odata2[i];
      data1[i] = odata1[i];
      // Simple array of the data1 subset in order to draw the chart
      data1_array.push(data1[i]);
      // Simple array of the data2 subset in order to help in drawing the chart
      data2_array.push(data2[i]);
    }
  }

  const [colors, setColors] = useState([]);

  const updatecolors = async () => {
    const datatocolor = Object.values(props.missed);

    const toreturn = datatocolor.map((e) => {
      if (e >= 0 && e < 0.35) {
        return "blue";
      }
      if (e >= 0.35 && e < 0.65) {
        return "green";
      }
      if (e >= 0.65) {
        return "red";
      }
    });

    setColors(toreturn);
  };

  const ChartRef = useRef(null);
  const footer = (tooltipItems) => {
    let study1 = 0;
    let study2 = 0;
    let index = 0;

    tooltipItems.forEach(function (tooltipItem, i) {
      study1 += tooltipItem.parsed.y;
    });

    tooltipItems.forEach(function (tooltipItem, i) {
      study2 += tooltipItem.parsed.x;
      index += i;
    });

    var metadata = [];

    for (var i = 0; i < props.tdata.length; i++) {
      let tname = props.tdata[i].name;
      if (tname == "Internal_R2") {
        break;
      }

      // Skip if it corresponds to other cohorts data
      if (tname.includes(" R2") || tname.includes(" Rho") || tname.includes(" Missing Rate")) {
        continue;
      }

      metadata.push({
        name: tname,
        value: props.tdata[i].data[tooltipItems[0].dataIndex],
      });
    }

    return [
      props.name_2 + " : " + study1,
      props.name_1 + " : " + study2,
      props.name_2 +
        "_MissingRate : " +
        Object.values(props.missed)[tooltipItems[0].dataIndex],
      ...metadata.map((e) => {
        return e.name + " : " + e.value;
      }),
    ];
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "top",
      },
      subtitle: {
        display: false,
      },
      annotation: {
        annotations: [
          {
            type: "box",
            drawTime: "beforeDatasetsDraw",
            yScaleID: "y-axis-0",
            yMin: 0,
            yMax: Math.max(...data2_array) + 0.01,
            xMin: Math.max(...data1_array) + 0.01,
            xMax: Math.max(...data1_array) + 0.01 + (Math.max(...data1_array) * 100) / 5000,
            width: "100px",
            backgroundColor: function (context) {
              const chart = context.chart;
              const { ctx, chartArea } = chart;
              if (!chartArea) {
                // This case happens on initial chart load
                return;
              }
              return getGradient(ctx, chartArea);
            },
          },
          {
            type: "line", // x = y
            width: 10,
            xMin: 0,
            xMax: Math.max(...data1_array),
            yMin: 0,
            yMax: Math.max(...data1_array),
            backgroundColor: "rgba(255, 99, 132, 0.25)",
          },
        ],
      },
      title: {
        display: true,
        text: "",
      },
      tooltip: {
        yAlign: "bottom",

        callbacks: {
          footer: footer,
          title: () => {
            return "";
          },
          label: () => {
            return "";
          },
        },
      },
      datalabels: {
        display: false,
        formatter: function (value, context) {
          return value;
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: props.matrix.substring(1) + " in " + props.name_2,
          align: "center",
        },
      },

      y1: {
        min: 0,
        max: 1,
        title: {
          display: true,
          text: props.name_2 + " Missingness Rate",
          align: "center",
        },
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        suggestedMax: 1.05,
        max: Math.max(...data1_array) + 0.01 + (Math.max(...data1_array) * 100) / 5000,
        title: {
          display: true,
          text: props.matrix.substring(1) + " in " + props.name_1,
          align: "center",
        },
      },
    },
  };

  const labels = data1;
  let width, height, gradient;
  function getGradient(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      gradient.addColorStop(0, "blue");
      gradient.addColorStop(0.5, "green");
      gradient.addColorStop(1, "red");
    }

    return gradient;
  }

  const data = {
    labels,
    datasets: [
      {
        label: props.name_1 + " VS " + props.name_2,
        type: "scatter",
        elements: {
          point: {
            radius: 4,
          },
          title: {
            display: false,
            color: "red",
          },
        },
        data: data2,
        yAxisID: "y",
        backgroundColor: ["rgba(255, 99, 132, 0.0)"],
        borderColor: ["rgba(255, 99, 132, 0.0)"],
        labelString: "hello",
        pointBackgroundColor: colors,
      },
    ],
  };

  useEffect(() => {
    updatecolors();
    const chart = ChartRef.current;
    chart.update();
  }, [props.missed, props.data_2, props.data_1]);

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
    console.log("clicked !!");
    const base64Image = ChartRef.current.toBase64Image();
    console.log("img ", base64Image);
    let fileName = "image.png";
    let file = convertBase64ToFile(base64Image, fileName);
    saveAs(file, fileName);
  };

  return (
    <>
      <Chart ref={ChartRef} options={options} data={data} />
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
};

export default function ChartPlot(props) {
  const d = props.data.map((e) => {
    return { name: e.name };
  });

  const [cd, setcd] = useState(d);
  const [names, setNames] = useState(_.uniq(cd, "name"));

  const n = props.data.map((e) => {
    return { type: e.type };
  });
  const [cn, setc] = useState(n);
  const [types, setTypes] = useState(_.uniq(cn, "type"));

  const [study1, setStudy1] = useState(props.data[0].name);
  const [study2, setStudy2] = useState(props.data[2].name);
  const [missed, setMissed] = useState(props.data[4].name);
  const [matrix, setMatrix] = useState(props.data[0].type);

  const [datastudy1, setdataStudy1] = useState(props.data[0].data);
  const [datastudy2, setdataStudy2] = useState(props.data[2].data);
  const [misseddata, setMisseddata] = useState(props.data[4].data);

  const handleChange_1 = async (event) => {
    setStudy1(event.target.value);
    props.data.map((e) => {
      if (e.title == event.target.value + matrix) {
        setdataStudy1(e.data);
      }
    });
  };

  const handleChange_matrix = async (event) => {
    setMatrix(event.target.value);
    props.data.map((e) => {
      if (e.title == study1 + event.target.value) {
        setdataStudy1(e.data);
      }
    });
    props.data.map((e) => {
      if (e.title == study2 + event.target.value) {
        setdataStudy2(e.data);
      }
    });
  };

  const handleChange_2 = async (event) => {
    setStudy2(event.target.value);
    setMissed(event.target.value);
    props.data.map((e) => {
      if (e.title == event.target.value + matrix) {
        setdataStudy2(e.data);
      }
    });
    if (event.target.value == "INTERVAL (internal validation)") {
      console.log("Internal");
      props.data.map((e) => {
        if (e.title == "INTERVAL (internal validation)_R2") {
          console.log("this the r2");
          let tdata = Object.values(e.data).map((c) => {
            return 0;
          });
          setMisseddata(tdata);
        }
      });
    } else {
      props.data.map((e) => {
        console.log("just open c");
        if (e.title == event.target.value + "_MissingRate") {
          console.log("foundone");
          setMisseddata(e.data);
          return;
        }
      });
    }
  };

  console.log("the datastady : ", datastudy1);

  return (
    <React.Fragment>
      <div className="h-full">
        <div className="w-full h-[50px] flex">
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel id="test-select-label" className="bg-white pr-2">
              Cohort 1{" "}
            </InputLabel>
            <Select
              value={study1}
              onChange={handleChange_1}
              labelId="test-select-label"
              label="Label"
            >
              {names.map((r, index) => {
                return (
                  <MenuItem key={index} value={r.name}>
                    {r.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel id="test-select-label" className="bg-white pr-2">
              {" "}
              Cohort 2{" "}
            </InputLabel>

            <Select
              value={study2}
              onChange={handleChange_2}
              inputProps={{ "aria-label": "study 2" }}
              labelId="test-select-label"
              label="Label"
            >
              {names.map((r, index) => {
                return (
                  <MenuItem key={index} value={r.name}>
                    {r.name}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText className="text-indigo-600" />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel id="test-select-label">Metric </InputLabel>
            <Select
              value={matrix}
              onChange={handleChange_matrix}
              displayEmpty
              inputProps={{ "aria-label": "study 2" }}
              labelId="test-select-label"
              label="Label"
            >
              {types.map((r, index) => {
                return r.type != "_MissingRate" ? (
                  <MenuItem key={index} value={r.type}>
                    {r.type.substring(1)}
                  </MenuItem>
                ) : null;
              })}
            </Select>
          </FormControl>
        </div>
        <Suspense fallback={<div>data is comming !</div>}>
          <ChartWithData
            data_1={datastudy1}
            data_2={datastudy2}
            name_1={study1}
            name_2={study2}
            tdata={props.tdata}
            missed={misseddata}
            missed_name={missed}
            matrix={matrix}
            pagename={props.pagename}
          />
          <div className="w-full grid place-items-center py-10  ">
            <div className="w-full lg:w-[45%] pt-5  h-full">
              <CircleChart
                study_1={datastudy1}
                missed={misseddata}
                name_1={study1}
                name_2={study2}
                study_2={datastudy2}
                missed_name={missed}
                matrix={matrix}
              />
            </div>
          </div>
        </Suspense>
      </div>
    </React.Fragment>
  );
}
