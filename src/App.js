import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

import Sumary from "./pages/Scores/components/Sumary";
import Download from "./pages/Scores/components/Download";

import "./App.css";
import { BottomNavigation } from "@mui/material";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Scores } from "./pages/Scores";
import "./index.scss";
import FAQs from "./pages/FAQs";
import Cohorts from "./pages/Cohorts";
import About from "./pages/About";
import Applications from "./pages/Applications";
import Find from "./pages/Search";

import ReactGA from "react-ga4";

/// please replace the ID with your id from google analytics
const TRACKING_ID = "G-W6WTTV63GG"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
 /// useEffect(() => {
 ///   ReactGA.pageview(window.location.pathname + window.location.search);
 /// }, []);
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
            path="Scores/Somalogic/INTERVAL"
            key="2"
            index="2"
            element={
              <Scores
                page="/Scores/Somalogic/INTERVAL"
                name="Proteomics (Somalogic)"
              />
            }
          />
          <Route
            path="Scores/Olink/INTERVAL"
            key="3"
            index="3"
            element={
              <Scores page="/Scores/Olink/INTERVAL" name="Proteomics (Olink)" />
            }
          />
          <Route
            path="Scores/Metabolon/INTERVAL"
            key="4"
            index="4"
            element={
              <Scores
                page="/Scores/Metabolon/INTERVAL"
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
            path="/Scores/Illumina_RNAseq/INTERVAL"
            key="6"
            index="6"
            element={
              <Scores
                page="/Scores/Illumina_RNAseq/INTERVAL"
                name="Transcriptomics (Illumina RNAseq)"
              />
            }
          />
          <Route
            path="/SubmitScores"
            index="10"
            key="10"
            element={
              <ExternalLink href="https://forms.gle/KLZGbvurrftF5vo46" />
            }
          />
        </Routes>
        <NavBar />
      </Router>
    </div>
  );
}

const ExternalLink = ({ href, children }) => {
  window.location.replace(href);
  return null;
};

export default App;
