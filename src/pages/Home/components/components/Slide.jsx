import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import {Link} from "react-router-dom"

import Href from "./Href";

function Slide(props) {
  return (
    <Card
      sx={{ maxWidth: 345, minHeight: 290 }}
      style={{
        border: "1px solid rgb(240, 244, 248)",
        "box-shadow": " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.logo}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="block text-black  font-bold xl:inline"
        >
          {props.text}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
        >
          {props.discription}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="grid place-items-center w-full mt-3 sm:mt-0 sm:ml-3 ">
          <Link
            to={props.href}
            target="_blank"
            className=" w-full flex items-center justify-center px-4 py-1 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-lg md:px-4"
          >
            Learn more
          </Link>
        </div>
      </CardActions>
    </Card>
  );
}

export default Slide;
