import React from "react";
import {
  OptimizelyProvider,
  OptimizelyExperiment,
  OptimizelyVariation,
  createInstance,
} from "@optimizely/react-sdk";
import { v4 as uuidv4 } from "uuid";
import DefualtComp from "./components/Default/DefaultComp";
import SumComp from "./components/Sum/SumComp";
import MultiplyComp from "./components/Multiply/MultiplyComp";
import "./assets/scss/global.css";

const opInstance = createInstance({
  sdkKey: "QYHzLSWgc9K6rp7LnLAnj",
});

const getUser = () => {
  let token = localStorage.getItem("user-token");
  if (!token) {
    token = uuidv4();
    localStorage.setItem("user-token", token);
  }
  return token;
};

function App() {
  return (
    <OptimizelyProvider optimizely={opInstance} user={{ id: getUser() }}>
      <OptimizelyExperiment experiment="button_test">
        <OptimizelyVariation variation="sum">
          <SumComp />
        </OptimizelyVariation>
        <OptimizelyVariation variation="multiply">
          <MultiplyComp />
        </OptimizelyVariation>
        <OptimizelyVariation default>
          <DefualtComp />
        </OptimizelyVariation>
      </OptimizelyExperiment>
    </OptimizelyProvider>
  );
}

export default App;
