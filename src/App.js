import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

import Sumary from "./pages/Scores/components/Sumary";
import Download from "./pages/Scores/components/Download";

import "./App.css";
import { BottomNavigation } from "@mui/material";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Scores, Menu } from "./pages/Scores";
import "./index.scss";
import FAQs from "./pages/FAQs";
import Cohorts from "./pages/Cohorts";
import About from "./pages/About";
import Applications from "./pages/Applications";
import Find from "./pages/Search";
import SubmitScores from "./pages/SubmitScores";

import ReactGA from "react-ga";

/// please replace the ID with your id from google analytics
const TRACKING_ID = "UA-188536537-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Applications" element={<Applications name="" />} />
          <Route
            path="/Applications/pathway"
            element={<Applications name="pathway" />}
          />

          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/find" element={<Find />} />
          <Route path="Cohorts" element={<Cohorts />} />
          <Route path="/About" element={<About />} />

          <Route
            path="Scores/"
            key="1"
            index="1"
            element={<Scores page="/Scores" name="Scores" />}
          />
          <Route
            path="Scores/SOMALOGIC/INTERVAL"
            key="2"
            index="2"
            element={
              <Scores
                page="Scores/SOMALOGIC/INTERVAL"
                name="Proteomics (Somalogic)"
              />
            }
          />

          <Route
            path="Scores/OLINK/INTERVAL"
            key="3"
            index="3"
            element={
              <Scores page="/Scores/OLINK/INTERVAL" name="Proteomics (Olink)" />
            }
          />
          <Route
            path="Scores/METABOLON/INTERVAL"
            key="4"
            index="4"
            element={
              <Scores
                page="Scores/METABOLON/INTERVAL"
                name="Metabolomics (Metabolon)"
              />
            }
          />
          <Route
            path="Scores/Nightingale/INTERVAL"
            key="5"
            index="5"
            element={
              <Scores
                page="/Scores/Nightingale/INTERVAL"
                name="Metabolomics (Nightingale)"
              />
            }
          />
          <Route
            path="/Scores/ILLUMINA_RNASEQ/INTERVAL"
            key="6"
            index="6"
            element={
              <Scores
                page="/Scores/ILLUMINA_RNASEQ/INTERVAL"
                name="Transcriptomics (Illumina RNAseq)"
              />
            }
          />

          <Route
            path="Scores/SOMALOGIC"
            key="2"
            index="2"
            element={<Menu page={"SOMALOGIC"} />}
          />

          <Route
            path="Scores/OLINK"
            key="2"
            index="2"
            element={<Menu page={"OLINK"} />}
          />

          <Route
            path="Scores/METABOLON"
            key="2"
            index="2"
            element={<Menu page={"METABOLON"} />}
          />

          <Route
            path="Scores/Nightingale"
            key="2"
            index="2"
            element={<Menu page={"Nightingale"} />}
          />

          <Route
            path="Scores/ILLUMINA_RNASEQ"
            key="2"
            index="2"
            element={<Menu page={"ILLUMINA_RNASEQ"} />}
          />

          <Route
            path="/SubmitScore"
            key="7"
            index="7"
            element={<SubmitScores />}
          />
        </Routes>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
