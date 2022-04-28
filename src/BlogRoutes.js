import React from "react";
import Data from "./Api/Data";

const BlogRoutes = {
  "/Scores/SOMALOGIC": {
    data: Data("Scores", "SOMALOGIC"),
    version: 0,
    name: "SOMALOGIC",
  },
  "/Scores/OLINK": {
    data: Data("Scores", "OLINK"),
    version: 0,
    name: "OLINK",
  },
  "/Scores/METABOLON": {
    data: Data("Scores", "METABOLON"),
    version: 0,
    name: "METABOLON",
  },
  "/Scores/ILLUMINA_RNASEQ": {
    data: Data("Scores", "ILLUMINA_RNASEQ"),
    version: 0,
    name: "ILLUMINA_RNASEQ",
  },
};


// export the full model
export default BlogRoutes;
