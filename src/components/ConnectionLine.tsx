import React from "react";
import { ConnectionLineComponentProps } from "reactflow";

const ConnectionLine: React.FC<ConnectionLineComponentProps> = (props) => {
  const { fromX, fromY, toX, toY } = props;
  const path = `M${fromX},${fromY} L${toX},${toY}`;
  return <path fill="none" stroke="#222" strokeWidth={2} d={path} />;
};

export default ConnectionLine;
