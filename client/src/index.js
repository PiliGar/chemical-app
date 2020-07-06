import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { MainContextProvider } from "./context/MainContext";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <MainContextProvider>
      <App />
    </MainContextProvider>,
    root
  );
});
