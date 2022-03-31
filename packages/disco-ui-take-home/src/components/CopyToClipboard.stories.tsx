import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CopyToClipboard } from "./CopyToClipboard";

export default {
  title: "Copy",
  component: CopyToClipboard,
} as ComponentMeta<typeof CopyToClipboard>;

const Template: ComponentStory<typeof CopyToClipboard> = () => <CopyToClipboard text="copied" />;

export const CopyIcon = Template.bind({});
