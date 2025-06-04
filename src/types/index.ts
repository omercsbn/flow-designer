export type PhaseType = "grpc" | "rest";

export type Phase = {
  id: string;
  name: string;
  seq: number;
  prevIds: string[];
  nextIds: string[];
  type: PhaseType;
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

export type Positions = Record<string, { x: number; y: number }>;

export type FlowDefinition = {
  phases: Phase[];
  positions: Positions;
};
