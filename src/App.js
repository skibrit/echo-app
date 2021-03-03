import React from "react";
import {
  OptimizelyProvider,
  OptimizelyExperiment,
  OptimizelyVariation,
  createInstance,
} from "@optimizely/react-sdk";
import { v4 as uuidv4 } from "uuid";
import Wrapper from "./components/Wrapper/AppWrapper";
import "./App.css";

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
      <Wrapper />
    </OptimizelyProvider>
  );
}

export default App;
