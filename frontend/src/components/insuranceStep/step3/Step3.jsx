import React from "react";
import InsuranceStepHero from "../InsuranceStepHero";
import FormSteps from "../FormSteps";
import Step3Form from "./Step3Form";

function Step3() {
  return (
    <div>
      <div>
        <InsuranceStepHero />
        <FormSteps />
        <Step3Form />
      </div>
    </div>
  );
}

export default Step3;
