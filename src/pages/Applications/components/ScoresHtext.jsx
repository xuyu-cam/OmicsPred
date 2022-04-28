import React from "react";

import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";

export default function ScoresHtext(props) {
  return (
    <div className="py-2 w-full float-left">
      <h1
        style={{ "fontFamily": "Poppins" }}
        className="text-xl  tracking-tight font-extrabold font-sans text-gray-900 sm:text-xl md:text-xl"
      >
        <div>
          <span className="text-indigo-600 inline">
            <DataSaverOffIcon className="mx-2"></DataSaverOffIcon>
          </span>
          {props.text}
        </div>
      </h1>
    </div>
  );
}
