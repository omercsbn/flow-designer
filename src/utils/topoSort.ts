import { Phase } from "../types";

export function topoSort(phases: Phase[]): Phase[] {
  const indegree: Record<string, number> = {};
  const map: Record<string, Phase> = {};
  for (const p of phases) {
    indegree[p.id] = p.prevIds.length;
    map[p.id] = p;
  }

  const queue: Phase[] = [];
  phases.forEach(p => { if (indegree[p.id] === 0) queue.push(p); });
  const sorted: Phase[] = [];

  while (queue.length) {
    const node = queue.shift()!;
    sorted.push(node);
    node.nextIds.forEach(nid => {
      indegree[nid]--;
      if (indegree[nid] === 0) queue.push(map[nid]);
    });
  }

  return sorted;
}
