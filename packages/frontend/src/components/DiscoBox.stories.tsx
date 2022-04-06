import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@mui/material";
import { DiscoBox } from "./DiscoBox";

export default {
  title: "Disco Elements",
  component: DiscoBox,
} as ComponentMeta<typeof DiscoBox>;

const Template: ComponentStory<typeof DiscoBox> = () => (
  <DiscoBox sx={{ minHeight: "128px" }}>
    <Typography variant="h4">Let's disco? 🕺</Typography>
  </DiscoBox>
);

export const discoBox = Template.bind({});
