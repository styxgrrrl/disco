import * as React from "react";
import { Box, Typography } from "@mui/material";
import { DidView } from "../";

export const CredentialHeader: React.FC = (props) => {
  return <Box sx={{ padding: "16px" }}>{props.children}</Box>;
};

export const CredentialSection: React.FC = (props) => {
  return <Box sx={{ borderTop: "1px solid #3A3E40", padding: "16px" }}>{props.children}</Box>;
};

export const CredentialFieldItem: React.FC = (props) => {
  return <Box sx={{ marginBottom: "12px" }}>{props.children}</Box>;
};

export const CredentialFieldLabel: React.FC = (props) => {
  return (
    <Typography variant="caption" sx={{ color: "#B4B8BB", display: "block" }}>
      {props.children}
    </Typography>
  );
};

export const CredentialFieldValue: React.FC = (props) => {
  return (
    <Typography variant="caption" sx={{ color: "#EFF4F6", display: "block" }}>
      {props.children}
    </Typography>
  );
};

export const CredentialDid: React.FC<{ did: string }> = ({ did }) => {
  return <DidView copy color="#EFF4F6" typographyVariant="caption" did={did} />;
};
