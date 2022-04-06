import React from "react";
import { ComponentStory } from "@storybook/react";
import { ProfilesList } from "./ProfilesList";
import { Box, TextareaAutosize } from "@mui/material";

export default {
  title: "Profiles",
  component: ProfilesList,
};

const Template: ComponentStory<typeof ProfilesList> = (args) => {
  return <ProfilesList {...args} />;
};
export const profilesList = Template.bind({});
profilesList.storyName = "ProfilesList";
