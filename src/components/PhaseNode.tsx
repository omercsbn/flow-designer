import React from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { Phase } from "../types";

const PhaseNode: React.FC<NodeProps<Phase>> = ({ data }) => {
  return (
    <div
      className={`px-4 py-2 rounded shadow-md bg-white border-2 ${{
        grpc: "border-blue-500",
        rest: "border-green-500",
      }[data.type]}`}
    >
      <div className="font-bold text-sm mb-1 flex justify-between items-center">
        <span>{data.name}</span>
        <span className="text-xs bg-gray-200 px-1 rounded">{data.type}</span>
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default PhaseNode;
