import React from "react";
import Header from "../../Header";
import InsuranceStepHero from "../InsuranceStepHero";
import FormSteps from "../FormSteps";
import Step2Form from "./Step2Form";
import Footer from "../../Footer";

function Step2() {
  return (
    <div>
      <div>
        <InsuranceStepHero />
        <FormSteps />
        <Step2Form />
      </div>
    </div>
  );
}

export default Step2;
