import { Typography } from "@mui/material";
import react from "react";

import Htext from "./Htext";

const Container = (props) => {
  return (
    <div className="w-full h-auto py-2">
      <Htext text={props.title} />

      <div className="md:flex w-full">
        <div className="">
          <Typography className="text-xl text-gray-600 text-justify md:px-12" >{props.text}</Typography>
        </div>
        <div className="w-full grid place-items-center md:w-auto">
        {
          props.src ? (<img className="w-[200px] md:w-[800px]" src={props.src} /> ) : null
        }
          
        </div>
      </div>
    </div>
  );
};

export default Container;
