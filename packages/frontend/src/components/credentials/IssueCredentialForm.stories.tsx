import React from "react";
import { ComponentStory } from "@storybook/react";

import { buildCredential } from "../../utils/";
import { IssueCredentialForm } from "./IssueCredentialForm";

export default {
  title: "Credentials",
  component: IssueCredentialForm,
};

const Template: ComponentStory<typeof IssueCredentialForm> = (args) => {
  const [cred, setCred] = React.useState<any>(
    buildCredential("did:3:kjzl6cwe1jw148uyox3goiyrwwe3aab8vatm3apxqisd351ww0dj6v5e3f61e8b", {
      kudos: "",
    }),
  );

  return (
    <>
      <IssueCredentialForm {...args} cred={cred} onChange={setCred} />
      Credential JSON:{" "}
      <pre
        style={{
          border: "1px dashed white",
          padding: "8px",
          wordBreak: "break-word",
          whiteSpace: "pre-wrap",
        }}
      >
        {JSON.stringify(cred, null, 2)}
      </pre>
    </>
  );
};

export const IssueForm = Template.bind({});
