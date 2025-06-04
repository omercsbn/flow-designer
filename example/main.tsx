import React from "react";
import ReactDOM from "react-dom/client";
import { FlowCanvas } from "../src";
import "tailwindcss/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="w-full h-full">
      <FlowCanvas />
    </div>
  </React.StrictMode>
);
