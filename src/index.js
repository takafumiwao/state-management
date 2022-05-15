import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { colors } from "./data/color-data.json";

export const ColorContext = createContext();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorContext.Provider value={{ colors }}>
      <App />
    </ColorContext.Provider>
  </React.StrictMode>
);
