import React from "react";
import { useFlowStore } from "../hooks/useFlowStore";
import { Phase } from "../types";

interface Props {
  selectedPhase: Phase | null;
  onClose: () => void;
}

export const ConfigPanel: React.FC<Props> = ({ selectedPhase, onClose }) => {
  const { updatePhase } = useFlowStore();

  if (!selectedPhase) return null;

  const update = (changes: Partial<Phase>) => {
    updatePhase({ ...selectedPhase, ...changes });
  };

  return (
    <div className="absolute right-0 top-0 w-72 h-full bg-white shadow p-4 overflow-auto">
      <button className="mb-2" onClick={onClose}>
        Close
      </button>
      <div className="space-y-2">
        <input
          className="w-full border p-1"
          value={selectedPhase.name}
          onChange={(e) => update({ name: e.target.value })}
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selectedPhase.isRolledback}
            onChange={(e) => update({ isRolledback: e.target.checked })}
          />
          <span>Rollback</span>
        </label>
        {/* other config inputs can go here */}
      </div>
    </div>
  );
};
