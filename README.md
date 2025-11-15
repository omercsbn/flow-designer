# @osabun/saga-flow-designer

Lightweight BPMN-like flow designer built with React Flow, Zustand and TailwindCSS.

## Features

- 🎨 Interactive flow canvas with drag-and-drop support
- 🔄 Automatic topological sorting for phase ordering
- 💾 Flow import/export functionality
- 🎯 Support for gRPC and REST phase types
- 🛡️ Built-in error boundary for graceful error handling
- 📦 TypeScript support with full type definitions
- 🎨 Customizable with TailwindCSS

## Install

```bash
npm install @osabun/saga-flow-designer
```

## Usage

### Basic Usage

```tsx
import { FlowCanvas, ErrorBoundary, useFlowStore } from '@osabun/saga-flow-designer'
import '@osabun/saga-flow-designer/dist/style.css'

function App() {
  const { setFlow } = useFlowStore();

  useEffect(() => {
    setFlow({
      phases: [
        {
          id: "1",
          name: "Start",
          seq: 1,
          prevIds: [],
          nextIds: ["2"],
          type: "grpc",
          isRolledback: false,
          config: { requestPropertyMap: {} },
        },
      ],
      positions: {
        "1": { x: 250, y: 50 },
      },
    });
  }, [setFlow]);

  return (
    <ErrorBoundary>
      <div style={{ width: '100%', height: '600px' }}>
        <FlowCanvas />
      </div>
    </ErrorBoundary>
  );
}
```

### With Configuration Panel

```tsx
import { FlowCanvas, ConfigPanel, useFlowStore } from '@osabun/saga-flow-designer'
import { useState } from 'react'

function App() {
  const [selectedPhase, setSelectedPhase] = useState(null);
  
  return (
    <div className="relative h-screen">
      <FlowCanvas />
      <ConfigPanel 
        selectedPhase={selectedPhase} 
        onClose={() => setSelectedPhase(null)} 
      />
    </div>
  );
}
```

### Flow Serialization

```tsx
import { exportFlow, importFlow, useFlowStore } from '@osabun/saga-flow-designer'

function FlowManager() {
  const { flow, setFlow } = useFlowStore();
  
  const handleExport = () => {
    const json = exportFlow(flow);
    console.log(json);
  };
  
  const handleImport = (json: string) => {
    const importedFlow = importFlow(json);
    setFlow(importedFlow);
  };
  
  return (
    <div>
      <button onClick={handleExport}>Export Flow</button>
      <button onClick={() => handleImport(jsonString)}>Import Flow</button>
    </div>
  );
}
```

## API

### Components

#### `FlowCanvas`
Main canvas component for displaying and interacting with the flow.

#### `ConfigPanel`
Panel component for editing phase configurations.

Props:
- `selectedPhase: Phase | null` - Currently selected phase
- `onClose: () => void` - Callback when panel is closed

#### `ErrorBoundary`
Error boundary component for graceful error handling.

Props:
- `children: ReactNode` - Child components
- `fallback?: ReactNode` - Optional custom error UI

### Hooks

#### `useFlowStore`
Zustand store hook for managing flow state.

Returns:
- `flow: FlowDefinition` - Current flow definition
- `setFlow: (flow: FlowDefinition) => void` - Set entire flow
- `addPhase: (phase: Phase) => void` - Add a phase
- `updatePhase: (phase: Phase) => void` - Update a phase
- `removePhase: (phaseId: string) => void` - Remove a phase

### Utilities

#### `exportFlow(flow: FlowDefinition): string`
Export flow to JSON string.

#### `importFlow(json: string): FlowDefinition`
Import flow from JSON string.

#### `topoSort(phases: Phase[]): Phase[]`
Topologically sort phases based on dependencies.

#### `recalcSeq()`
Recalculate phase sequence numbers based on topological order.

## Types

### `Phase`
```typescript
type Phase = {
  id: string;
  name: string;
  seq: number;
  prevIds: string[];
  nextIds: string[];
  type: "grpc" | "rest";
  isRolledback: boolean;
  config: {
    grpcServiceUrl?: string;
    grpcMethod?: number;
    restUrl?: string;
    requestPropertyMap: Record<string, string>;
    grpcRequestBody?: string;
    grpcResponseBody?: string;
    restRequestBody?: string;
    restResponseBody?: string;
  };
};
```

### `FlowDefinition`
```typescript
type FlowDefinition = {
  phases: Phase[];
  positions: Record<string, { x: number; y: number }>;
};
```

## Development

See `example` folder for demo using Vite.

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run example dev server
npm run dev
```

## License

MIT
