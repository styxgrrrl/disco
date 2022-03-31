import React from "react";
import { Box } from "@mui/material";

export interface SuccessProps {}

export const Success: React.FC<SuccessProps> = (props) => {
  return <Box sx={{ padding: "16px", background: "#3A3E40" }}>{props.children}</Box>;
};
