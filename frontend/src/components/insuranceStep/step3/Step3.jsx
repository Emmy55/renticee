import React from "react";
import Header from "../../Header";
import InsuranceStepHero from "../InsuranceStepHero";
import FormSteps from "../FormSteps";
import Step3Form from "./Step3Form";
import Footer from "../../Footer";

function Step3() {
  return (
    <div>
      <div>
        <Header />
        <InsuranceStepHero />
        <FormSteps />
        <Step3Form />
        <Footer />
      </div>
    </div>
  );
}

export default Step3;
