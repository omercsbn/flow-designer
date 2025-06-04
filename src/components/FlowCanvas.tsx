import React from "react";
import ReactFlow, { Background, Controls, ConnectionLineType } from "reactflow";
import { useFlowStore } from "../hooks/useFlowStore";
import PhaseNode from "./PhaseNode";
import ConnectionLine from "./ConnectionLine";
import "reactflow/dist/style.css";

const nodeTypes = { phase: PhaseNode };

export const FlowCanvas: React.FC = () => {
  const { flow, setFlow } = useFlowStore();

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={flow.phases.map((p) => ({
          id: p.id,
          type: "phase",
          data: p,
          position: flow.positions[p.id] || { x: 0, y: 0 },
        }))}
        edges={flow.phases.flatMap((p) =>
          p.nextIds.map((n) => ({
            id: `${p.id}-${n}`,
            source: p.id,
            target: n,
            type: "default",
          }))
        )}
        onNodesChange={() => {}}
        onEdgesChange={() => {}}
        nodeTypes={nodeTypes}
        connectionLineComponent={ConnectionLine}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;
