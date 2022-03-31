import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@mui/material";
import { Success } from "./Success";

export default {
  title: "Disco Elements",
  component: Success,
} as ComponentMeta<typeof Success>;

const Template: ComponentStory<typeof Success> = () => <Success>Success!</Success>;

export const success = Template.bind({});
