import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import { RegistrationFormStepper } from "./RegistrationFormStepper";
import { GlobalContextProvider } from "./context/global-context";

export default function App() {
  return (
    <div className="App mt-4">
      <div className="container">
        <GlobalContextProvider>
          <RegistrationFormStepper />
        </GlobalContextProvider>
      </div>
    </div>
  );
}
