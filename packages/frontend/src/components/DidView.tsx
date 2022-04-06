import React from "react";
import { Box, Typography, TypographyTypeMap } from "@mui/material";
import { CopyToClipboard } from "./CopyToClipboard";
import { truncateDid } from "../utils";

export interface DidViewProps {
  did: string;
  color?: string;
  copy?: boolean;
  dontTruncate?: boolean;
  typographyVariant?: TypographyTypeMap["props"]["variant"];
}

export const DidView: React.FunctionComponent<DidViewProps> = (props) => {
  const { color, copy, dontTruncate, did, typographyVariant } = props;

  return (
    <Box sx={{ alignItems: "center", display: "flex", width: "100%" }}>
      <Typography color={color || "#fff"} variant={typographyVariant || "body2"}>
        {dontTruncate ? did : truncateDid(did)}
      </Typography>
      {copy && (
        <Box ml={1}>
          <CopyToClipboard text={did} />
        </Box>
      )}
    </Box>
  );
};
