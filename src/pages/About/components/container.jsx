import { Typography } from "@mui/material";
import react from "react";

import Htext from "./Htext";

const Container = (props) => {
  return (
    <div className="w-full h-auto py-2">
      <Htext text={props.title} />

      <div className="flex w-full">
        <div className="">
          <Typography className="text-xl text-gray-600 text-justify px-12" >{props.text}</Typography>
        </div>
      </div>
    </div>
  );
};

export default Container;
