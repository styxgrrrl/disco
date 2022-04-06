import React from "react";
import { ComponentStory } from "@storybook/react";
import { ProfileEdit } from "./ProfileEdit";

export default {
  title: "Profiles",
  component: ProfileEdit,
};

const Template: ComponentStory<typeof ProfileEdit> = (args) => {
  return <ProfileEdit {...args} />;
};

export const profileEdit = Template.bind({});
profileEdit.storyName = "ProfileEdit";
