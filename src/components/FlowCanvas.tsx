import React, { useCallback } from "react";
import ReactFlow, { 
  Background, 
  Controls, 
  applyNodeChanges, 
  applyEdgeChanges,
  NodeChange,
  EdgeChange
} from "reactflow";
import { useFlowStore } from "../hooks/useFlowStore";
import PhaseNode from "./PhaseNode";
import ConnectionLine from "./ConnectionLine";
import "reactflow/dist/style.css";

const nodeTypes = { phase: PhaseNode };

export const FlowCanvas: React.FC = () => {
  const { flow, setFlow } = useFlowStore();

  const onNodesChange = useCallback((changes: NodeChange[]) => {
    const updatedNodes = applyNodeChanges(
      changes,
      flow.phases.map((p) => ({
        id: p.id,
        type: "phase",
        data: p,
        position: flow.positions[p.id] || { x: 0, y: 0 },
      }))
    );

    const positions = updatedNodes.reduce((acc, node) => {
      acc[node.id] = node.position;
      return acc;
    }, {} as Record<string, { x: number; y: number }>);

    setFlow({ ...flow, positions });
  }, [flow, setFlow]);

  const onEdgesChange = useCallback((changes: EdgeChange[]) => {
    const updatedEdges = applyEdgeChanges(
      changes,
      flow.phases.flatMap((p) =>
        p.nextIds.map((n) => ({
          id: `${p.id}-${n}`,
          source: p.id,
          target: n,
          type: "default",
        }))
      )
    );

    // Update phases based on edge changes
    const edgeMap = new Map<string, string[]>();
    updatedEdges.forEach(edge => {
      if (!edgeMap.has(edge.source)) {
        edgeMap.set(edge.source, []);
      }
      edgeMap.get(edge.source)?.push(edge.target);
    });

    const updatedPhases = flow.phases.map(phase => ({
      ...phase,
      nextIds: edgeMap.get(phase.id) || [],
      prevIds: flow.phases
        .filter(p => edgeMap.get(p.id)?.includes(phase.id))
        .map(p => p.id),
    }));

    setFlow({ ...flow, phases: updatedPhases });
  }, [flow, setFlow]);

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
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        connectionLineComponent={ConnectionLine}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;
