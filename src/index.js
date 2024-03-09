import React from "react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { UIStateProvider } from "./contexts/UIStateContext";
import { ComponentsDataProvider } from "./contexts/ComponentsDataContext";
Amplify.configure(awsExports);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UIStateProvider>
      <ComponentsDataProvider>
        <App />
      </ComponentsDataProvider>
    </UIStateProvider>
  </React.StrictMode>
);
