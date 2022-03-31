import React from "react";
import { ComponentStory } from "@storybook/react";

import { Credential } from "./Credential";
import { EXAMPLE_CREDENTIAL } from "../../utils/";

export default {
  title: "Credentials",
  component: Credential,
};

const Template: ComponentStory<typeof Credential> = () => {
  return <Credential cred={EXAMPLE_CREDENTIAL} />;
};

export const View = Template.bind({});
