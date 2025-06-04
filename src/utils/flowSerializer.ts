import { FlowDefinition, Phase } from "../types";

export function exportFlow(flow: FlowDefinition): string {
  return JSON.stringify(flow, null, 2);
}

function validateFlow(flow: FlowDefinition): void {
  const ids = new Set<string>();
  for (const phase of flow.phases) {
    if (ids.has(phase.id)) {
      throw new Error(`Duplicate phase id ${phase.id}`);
    }
    ids.add(phase.id);
  }
}

export function importFlow(json: string): FlowDefinition {
  const parsed = JSON.parse(json) as FlowDefinition;
  validateFlow(parsed);
  return parsed;
}
