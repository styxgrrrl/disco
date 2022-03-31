import * as React from "react";
import { Box, Typography } from "@mui/material";

import { VC, Profile } from "../../types";
import { IssueCredentialForm } from "./IssueCredentialForm";
import { DiscoButton } from "../DiscoButton";

// @NOTE: You will use this component to display the credential in the Review step
import { Credential } from "./Credential";

// @NOTE: You will use this async function from the Review step, and when it returns, this component should advance to the Success step
import { signVc } from "../../utils/";

// @NOTE: You will edit and use this component in the Success step
import { Success } from "../Success";

export interface IssueCredentialFlowProps {
  issuer: string;
  recipient: Profile; // @NOTE: This prop contains information (name, profile image URL) about the recipient of the issued credential that you may use in the success step
  initialCredential: VC;
}

export const IssueCredentialFlow: React.FC<IssueCredentialFlowProps> = (props) => {
  const [cred, setCred] = React.useState(props.initialCredential);

  return (
    <Box>
      <Typography variant="h6">Issue Kudos Credential</Typography>

      <Typography variant="body1" sx={{ marginBottom: "16px" }}>
        This is your component! Please edit it for this exercise as you see fit.
      </Typography>

      <IssueCredentialForm cred={cred} onChange={setCred} />

      <DiscoButton onClick={() => console.log("clicked! VC:", cred, "recipient:", props.recipient)}>Review</DiscoButton>
    </Box>
  );
};
