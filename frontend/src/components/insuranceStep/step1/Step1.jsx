import React from "react";
import InsuranceStepHero from "../InsuranceStepHero";
import FormSteps from "../FormSteps";
import Step1Form from "./Step1Form";

function Step1() {
  return (
    <div>
      <div>
        <InsuranceStepHero />
        <FormSteps />
        <Step1Form />
      </div>
    </div>
  );
}

export default Step1;
