import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar, GridApi } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import _ from "underscore";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Htext from "./components/Htext";

import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export default function Explore(props) {
  const [r, setRows] = useState([]);
  const [f, setFiltredRows] = useState([]);

  var names = props.data.map((e) => {
    return e.name;
  });

  var columns = names.map((e) => {
    if (e !== "Protein") {
      return {
        field: e,
        headerName: e,
        width: 200,
        align: "center",
        headerAlign: "center",
        resizable: true,
      };
    } else {
      return {
        field: e,
        headerName: e,
        width: 500,
        align: "center",
        headerAlign: "center",
        resizable: true,
      };
    }
  });

  var getit = false;
  for (var i = 0; i < names.length; i++) {
    if (names[i] == "Internal_R2") getit = true;
    if (!getit && i !== 0 && names[i] !== "#SNP" && names[i] !== "Gene") {
      columns = [
        ...columns,
        {
          field: names[i],
          headerName: names[i],
          width: 400,
          align: "center",
          headerAlign: "center",
          resizable: true,
        },
      ];
    } else {
      columns = [
        ...columns,
        {
          field: names[i],
          headerName: names[i],
          width: 200,
          align: "center",
          headerAlign: "center",
          resizable: true,
        },
      ];
    }
  }

  useEffect(() => {
    var rows = [];
    var l = 0;

    const rowsBefore = props.data.map((e) => {
      return Object.values(e.data);
    });
    const rowsAfter = _.zip.apply(_, rowsBefore);

    rowsAfter.map((e) => {
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
  }, [props.data]);

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
    <div className="h-auto w-[100%] max-w-[100%] pb-10 grid place-items-center">
      <Htext text="Explore traits and their genetic scores:" />
      <div className="max-w-[100%] w-full px-0 lg:px-12">
        <div className="w-[100%] h-[650px] pl-4 pr-4 pb-4 rounded-md mb-5 mr-5">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 700,
            }}
            className=" mb-2 shadow-none max-w-[90%] w-[400px]"
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Find your row quickly"
              onChange={(e) => handleSearch(e)}
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <DataGrid
            align="center"
            rows={f}
            columns={columns}
            pageSize={50}
            components={{ Toolbar: GridToolbar }}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
