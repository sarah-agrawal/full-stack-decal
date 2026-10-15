import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

// TODO: Wrap <App /> with <BrowserRouter>
// TODO: Wrap <App /> with <ThemeProvider>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider> 
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);