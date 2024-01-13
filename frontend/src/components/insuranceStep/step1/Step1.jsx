import React from "react";
import Header from "../../Header";
import InsuranceStepHero from "../InsuranceStepHero";
import FormSteps from "../FormSteps";
import Step1Form from "./Step1Form";
import Footer from "../../Footer";

function Step1() {
  return (
    <div>
      <div>
        <Header />
        <InsuranceStepHero />
        <FormSteps />
        <Step1Form />
        <Footer />
      </div>
    </div>
  );
}

export default Step1;
