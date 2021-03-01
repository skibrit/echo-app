import React from "react";
import {
  OptimizelyProvider,
  OptimizelyExperiment,
  OptimizelyVariation,
  createInstance,
} from "@optimizely/react-sdk";
import AppWrapper from "./components/Wrapper/AppWrapper";

const opInstance = createInstance({
  sdkKey: "QYHzLSWgc9K6rp7LnLAnj",
});

function App() {
  return (
    <OptimizelyProvider
      optimizely={opInstance}
      user={{ id: "QYHzLSWgc9K6rp7LnLAnj" }}
    >
      <OptimizelyExperiment experiment="button_test">
        <OptimizelyVariation variation="sum">
          <h2>Sum Values Feature</h2>
        </OptimizelyVariation>
        <OptimizelyVariation variation="multiply">
          <h2>Multiply Values Feature</h2>
        </OptimizelyVariation>
        <OptimizelyVariation default>
          <h2>Static old Values Feature</h2>
        </OptimizelyVariation>
      </OptimizelyExperiment>
    </OptimizelyProvider>
  );
}

export default App;
