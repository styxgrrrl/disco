import * as React from "react";
import styled from "@emotion/styled";
import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { copyToClipboard } from "../utils";

const ContentCopyStyled = styled.span`
  cursor: pointer;
  &:hover svg {
    fill: "#fff";
    transition: 250ms ease;
  }
`;

export interface CopyToClipboardProps {
  text: string;
  hoverTitle?: string;
  size?: string;
}

export const CopyToClipboard: React.FunctionComponent<CopyToClipboardProps> = (props) => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  if (copied) {
    return <CheckIcon color="success" sx={{ fontSize: props.size ? props.size : "16px" }} />;
  }

  return (
    <ContentCopyStyled onClick={() => setCopied(copyToClipboard(props.text))} title={props.hoverTitle}>
      <ContentCopyIcon htmlColor="#C295F380" sx={{ fontSize: props.size ? props.size : "16px" }} />
    </ContentCopyStyled>
  );
};
