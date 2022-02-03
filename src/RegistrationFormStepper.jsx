import React from "react";
import { useStep } from "react-hooks-helper";
import { Step1 } from "./views/Step1";
import { Step2 } from "./views/Step2";

const steps = [{ id: "step1" }, { id: "step2" }];

export const RegistrationFormStepper = () => {
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const props = { navigation };
  const { id } = step;

  switch (id) {
    case "step1":
      return <Step1 {...props} />;
    case "step2":
      return <Step2 {...props} />;
    default:
      return <> Error! </>;
  }
};
