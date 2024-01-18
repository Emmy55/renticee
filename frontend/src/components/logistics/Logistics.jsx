import React from "react";
import Header from "../Header";
import LogisticsHero from "./LogisticsHero";
import LogisticsMainText from "./LogisticsMainText";
import LogisticsMainForm from "./LogisticsMainForm";
import Footer from "../Footer";

function Logistics() {
  return (
    <div>
      <div>
        <Header />
        <LogisticsHero />
        <LogisticsMainText />
        <LogisticsMainForm />
        <Footer />
      </div>
    </div>
  );
}

export default Logistics;
