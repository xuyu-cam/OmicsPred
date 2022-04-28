import React, { useEffect, useState } from "react";
//import { DataGrid, GridToolbar, GridApi } from "@mui/x-data-grid";
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

import {
  Grid,
  Table,
  TableHeaderRow,
  TableFixedColumns,
  TableBandHeader,
  VirtualTable,
  TableColumnResizing,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";

import { PagingState, IntegratedPaging } from "@devexpress/dx-react-grid";

import DataGrid, {
  Column,
  ColumnChooser,
  ColumnFixing,
} from "devextreme-react/data-grid";



export default function Explore(props) {
  const [r, setRows] = useState([]);
  const [f, setFiltredRows] = useState([]);

  var names = props.data.map((e) => {
    return e.name;
  });

  var columns = names.map((e , i) => {
    if (e !== "Protein") {
      return {
        id: i , 
        name: e,
        title: e,
        width: 200,
        align: "center",
        headerAlign: "center",
        resizable: true,
      };
    } else {
      return {
        id : i , 
        name: e,
        title: e,
        width: 500,
        align: "center",
        headerAlign: "center",
        resizable: true,
      };
    }
  });



  useEffect(() => {
    var rows = [];

    const rowsBefore = props.data.map((e) => {
      return Object.values(e.data);
    });
    const rowsAfter = _.zip.apply(_, rowsBefore);

    rowsAfter.map((e, index) => {
      let obj = {};
      obj["ID"] = index;

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

  const [leftColumns] = useState([names[0], names[1]]);

  console.log("the f is ", f);
  return (
    <div className="h-auto w-full lg:w-[100%] py-0 my-0">
      <div className="pl-0">
        <Htext text="Explore traits and their genetic scores " />
      </div>
      <div className="w-full h-auto lg:px-12">
        <div className="w-full h-auto p-2 rounded-md   my-5 mr-5">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
            }}
            className=" mb-1 shadow-none max-w-[90%] w-[400px]"
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Find your traits quickly"
              onChange={(e) => handleSearch(e)}
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          <DataGrid
            id="gridContainer"
            dataSource={f}
            keyExpr="ID"
            allowColumnReordering={true}
            allowColumnResizing={true}
            columnAutoWidth={true}
            showBorders={true}
            className="max-h-[700px]"

          >
            <ColumnChooser enabled={true} />
            <ColumnFixing enabled={true} />

            {columns.map((c , i) => {
              if (i == 0 || i == 1) {
                return (
                  <Column
                    key={c.id}
                    alignment="center"
                    dataField={c.name}
                    fixed={true}
                  />
                );
              } else {
                return (
                  <Column key={c.id} alignment="center" dataField={c.name} />
                );
              }
            })}
          </DataGrid>
        </div>
      </div>
    </div>
  );
}
