import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DidView } from "./DidView";

export default {
  title: "DID",
  component: DidView,
} as ComponentMeta<typeof DidView>;

const Template: ComponentStory<typeof DidView> = () => (
  <DidView copy did="did:3:kjzl6cwe1jw1466t7qwr0yk4jscjqhy4y7iq7z3om5hyx7dd6xc71yr751vwunw" />
);

export const View = Template.bind({});
