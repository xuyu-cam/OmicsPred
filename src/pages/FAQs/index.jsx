import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

import LightbulbIcon from "@mui/icons-material/Lightbulb";

import Particles from "react-tsparticles";

export default function FAQs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const data = [
    {
      title: "What can we do with these genetic score models?",
      type: "General questions",
      text: "These genetic score models can be used to predict levels of biomolecular traits in genotyped cohorts. The predicted levels can be associated with complex phenotypes, which offers as a useful tool to investigate the molecular underpinnings of these phenotypes. The predicted levels can also allow integrative analyses with other available biomolecular traits in the cohort.",
    },
    {
      title: "How can I download model files of these genetic scores?",
      type: " General questions",
      text: "You can find a download link (named 'Download model files') on the Score page of each platform. Following the link, you will be directed to a cloud drive page where we hosted model files of all  the considerred traits for the platform. There is a \"Download\"   bottom at right-top corner of the page, which will allow you to  download all the model files in bulk. Or you can choose the model  file of a trait you are intersted in and download the particular  model file in a similar way. Please note that you can only download model files of gene expression traits in bulk as we have compressed them to a single file. ",
    },
    {
      title: " What method was used for genetic score development and why?",
      type: "Genetic score development",
      text: "The machine learning method Bayesian Ridge(BR), that based on individual - level genotype data, was used to construct genetic scores of biomolecular traits in the Atlas.The selection of BR is based on the results in one of our previous studies that benchmarked the performance of a variety of representative genetic scoring methods for the construction of numerous continuous molecular traits, and demonstrated BR was the top performing method in terms of both efficacy and efficiency. ",
    },
    {
      title:
        "How were the genetic variants (i.e. SNPs) selected before feeding to the genetic scoring method?",
      type: "Genetic score development",
      text: "To ensure the generalizability of genetic score models when applied to other cohorts, a variant filtering step was first performed for all the traits considered, which applied a MAF threshold of 0.5% and excluded all multi-allelic variants as well as ambiguous variants (i.e. A/T, G/C). A follow-up LD thinning step was carried out at an r2 threshold of 0.8 on all the variants, which aims to remove a certrain level of LD dependencies among variants and reduce the computational burden of genetic scoring method. The remaining variants were then filtered at the genome-wide significance threshold of 5e-8 (based on their GWAS summary statistics conducted on the INTERVAL training samples) for each trait. ",
    },
    {
      title: "How was the internal validation done?",
      type: "Genetic score development",
      text: "  The INTERVAL training samples of a trait were randomly and equally partitioned to five portions, from which any four portions are used to learn a genetic score model of the trait with Bayesian ridge regression, and the model’s performance was then tested on the remaining 20% of INTERVAL training samples, i.e. calculating the r2 score and Spearman correlation coefficient between the predicted genetic scores and the actual levels of the trait for these samples. ",
    },
    {
      title: " How was the external validation done?",
      type: "Genetic score development",
      text: " The genetic score model trained with INTERVAL training samples for a trait was used to calculate genetic scores of the validation samples (external cohorts or withheld INTERVAL samples). Then R2 score and Spearman correlation coefficient were calculated using the predicted scores of these samples against their acutal trait levels.",
    },
  ];

  const [filteredData, setFilteredData] = React.useState(data);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = data.filter((d) => {
      return (
        (d.text.toLowerCase() + d.title.toLowerCase()).search(value) !== -1
      );
    });
    setFilteredData(result);

    console.log(result);
  };

  return (
    <div className=" w-screen h-screen overflow-scroll pt-[100px]">
    
<div className="bg-white">

      <Paper
        component="div"
        className="m-auto my-8 bg-white z-50 w-full h-full"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          backgroundColor: "white",
          zIndex : 9999
        }}
       
      >
        <IconButton sx={{ p: "10px", backgroundColor :"white" }} aria-label="menu" className="bg-white">
          <SearchIcon className="w-full h-full text-indigo-600" />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          onChange={(e) => handleSearch(e)}
          placeholder="where is my page ?"
          inputProps={{ "aria-label": "search google maps" }}
          className="bg-white pl-3 rounded-lg py-2"
        />
      </Paper>

</div>

      <div className="w-full grid place-items-center ">
        <div className="w-[90%]  ">
          {filteredData.map((d, index) => {
            return (
              <Accordion
                expanded={expanded === index}
                onChange={handleChange(index)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{ width: "90%", flexShrink: 0 }}
                    className="flex font-bold"
                  >
                    <LightbulbIcon className="text-indigo-600 mr-6"></LightbulbIcon>
                    <h1 className="font-bold">{d.title}</h1>
                    <Typography className="text-slate-600 font-medium px-5 text-sm">
                      {d.type}
                    </Typography>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{d.text}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
}
