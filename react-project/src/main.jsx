import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./tugas/meeting-4/praktek/app";
import "./tugas/meeting-4/praktek/login/login.css";
import "./tugas/meeting-4/praktek/register/register.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
