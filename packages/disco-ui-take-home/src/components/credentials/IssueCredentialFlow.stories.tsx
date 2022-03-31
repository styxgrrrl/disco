import React from "react";
import { ComponentStory } from "@storybook/react";
import { VC, Profile } from "../../types";
import { buildCredential } from "../../utils/";
import { IssueCredentialFlow } from "./IssueCredentialFlow";

export default {
  title: "Credentials",
  component: IssueCredentialFlow,
};

const USER_DID = "did:3:kjzl6cwe1jw1466t7qwr0yk4jscjqhy4y7iq7z3om5hyx7dd6xc71yr751vwunw";
const RECIPIENT_PROFILE: Profile = {
  did: "did:ethr:0x8563388a129510f7c6ea2c6755e66a8937587b1d",
  name: "Disco Dancer",
  bio: "Disco is a genre of dance music and a subculture that emerged in the 1970s from the United States' urban nightlife scene. Its sound is typified by four-on-the-floor beats, syncopated basslines, string sections, horns, electric piano, synthesizers, and electric rhythm guitars.",
  avatarUrl: "https://i.imgur.com/k7vfbIQ.jpg",
};

const INITIAL_CREDENTIAL = buildCredential(
  USER_DID,
  {
    kudos: "",
  },
  RECIPIENT_PROFILE.did,
);

const Template: ComponentStory<typeof IssueCredentialFlow> = (args) => {
  return (
    <>
      <IssueCredentialFlow
        {...args}
        issuer={USER_DID}
        recipient={RECIPIENT_PROFILE}
        initialCredential={INITIAL_CREDENTIAL}
      />
    </>
  );
};

export const IssueFlow = Template.bind({});
