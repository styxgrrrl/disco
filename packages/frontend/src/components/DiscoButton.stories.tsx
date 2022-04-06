import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@mui/material";
import { DiscoButton } from "./DiscoButton";

export default {
  title: "Disco Elements",
  component: DiscoButton,
} as ComponentMeta<typeof DiscoButton>;

const Template: ComponentStory<typeof DiscoButton> = () => (
  <DiscoButton onClick={() => console.log("clicked!")}>Let's Disco!</DiscoButton>
);

export const discoButton = Template.bind({});
