import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { discoLinearGradient } from "../themes";

export const DiscoBox = styled(Box)<BoxProps>(() => ({
  background: discoLinearGradient,
  color: "#111",
  padding: "16px",
}));
