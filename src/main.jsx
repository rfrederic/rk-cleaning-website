import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import "./styles/global.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async"; // <- import provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      {" "}
      <App />
    </HelmetProvider>
  </StrictMode>
);
