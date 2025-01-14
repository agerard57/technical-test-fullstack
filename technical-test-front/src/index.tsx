import React from "react";
// eslint-disable-next-line import/no-internal-modules
import * as ReactDOMClient from "react-dom/client";

import { App } from "./App";
import "./index.css";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
