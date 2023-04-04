import React from "react";
import Header from "./components/Header";
import Platforms from "./components/Platforms"  ;
import Application from "./components/Application" ;
import Citation from "./components/Citation" ;
import Feedback from "./components/Feedback" ;
import Footer from "./components/Footer" ;
import Sponsors from "./components/Sponsors" ;
import News from "./components/News" ;
export default function Home() {
  return (
    <div>
      <Header />
      <News />
      <Platforms />
      <Application />
      <Citation />
      <Feedback />
      <Sponsors />
      <Footer />
    </div>
  );
}
