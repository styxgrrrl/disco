import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@mui/material";
import { DiscoText } from "./DiscoText";

export default {
  title: "Disco Elements",
  component: DiscoText,
} as ComponentMeta<typeof DiscoText>;

const Template: ComponentStory<typeof DiscoText> = () => (
  <Typography variant="h1">
    <DiscoText>Disco</DiscoText>
  </Typography>
);

export const discoText = Template.bind({});
