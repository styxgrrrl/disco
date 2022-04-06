import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DidView } from "./DidView";

export default {
  title: "DID",
  component: DidView,
} as ComponentMeta<typeof DidView>;

const Template: ComponentStory<typeof DidView> = () => (
  <DidView copy did="did:3:kjzl6cwe1jw148uyox3goiyrwwe3aab8vatm3apxqisd351ww0dj6v5e3f61e8b" />
);

export const View = Template.bind({});
