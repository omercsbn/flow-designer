import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { FlowCanvas, ErrorBoundary, useFlowStore } from "../src";
import "../src/style.css";

const sampleFlow = {
  phases: [
    {
      id: "1",
      name: "Start",
      seq: 1,
      prevIds: [],
      nextIds: ["2"],
      type: "grpc" as const,
      isRolledback: false,
      config: {
        requestPropertyMap: {},
      },
    },
    {
      id: "2",
      name: "Process Data",
      seq: 2,
      prevIds: ["1"],
      nextIds: ["3"],
      type: "rest" as const,
      isRolledback: false,
      config: {
        requestPropertyMap: {},
      },
    },
    {
      id: "3",
      name: "Complete",
      seq: 3,
      prevIds: ["2"],
      nextIds: [],
      type: "grpc" as const,
      isRolledback: false,
      config: {
        requestPropertyMap: {},
      },
    },
  ],
  positions: {
    "1": { x: 250, y: 50 },
    "2": { x: 250, y: 150 },
    "3": { x: 250, y: 250 },
  },
};

function App() {
  const { setFlow } = useFlowStore();

  useEffect(() => {
    setFlow(sampleFlow);
  }, [setFlow]);

  return (
    <ErrorBoundary>
      <div className="w-full h-full">
        <FlowCanvas />
      </div>
    </ErrorBoundary>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
