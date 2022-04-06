import * as React from "react";
import { Box } from "@mui/material";
import { discoLinearGradient } from "../themes";

export const DiscoText: React.FunctionComponent = (props) => {
  return (
    <Box
      component="span"
      sx={{
        background: discoLinearGradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {props.children}
    </Box>
  );
};
