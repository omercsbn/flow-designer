import create from "zustand";
import { FlowDefinition, Phase } from "../types";
import { topoSort } from "../utils/topoSort";

interface FlowState {
  flow: FlowDefinition;
  setFlow: (flow: FlowDefinition) => void;
  addPhase: (phase: Phase) => void;
  updatePhase: (phase: Phase) => void;
  removePhase: (phaseId: string) => void;
}

export const useFlowStore = create<FlowState>((set, get) => ({
  flow: { phases: [], positions: {} },
  setFlow: (flow) => set({ flow }),
  addPhase: (phase) =>
    set((state) => ({ flow: { ...state.flow, phases: [...state.flow.phases, phase] } })),
  updatePhase: (phase) =>
    set((state) => ({
      flow: {
        ...state.flow,
        phases: state.flow.phases.map((p) => (p.id === phase.id ? phase : p)),
      },
    })),
  removePhase: (id) =>
    set((state) => ({
      flow: {
        ...state.flow,
        phases: state.flow.phases.filter((p) => p.id !== id),
      },
    })),
}));

export function recalcSeq() {
  const { flow, setFlow } = useFlowStore.getState();
  const sorted = topoSort(flow.phases);
  const phases = sorted.map((p, idx) => ({ ...p, seq: idx + 1 }));
  setFlow({ ...flow, phases });
}
