import React from "react";
import { ComponentStory } from "@storybook/react";
import { ProfileView } from "./ProfileView";
import { Profile } from "../../types";

const DID = "did:3:kjzl6cwe1jw148uyox3goiyrwwe3aab8vatm3apxqisd351ww0dj6v5e3f61e8b";
const PROFILE: Profile = {
  bio: "Disco is a genre of dance music and a subculture that emerged in the 1970s from the United States' urban nightlife scene.",
  name: "Ouroboros",
  avatar: "https://i.imgur.com/EUMyU7h.jpg",
};

export default {
  title: "Profiles",
  component: ProfileView,
};

const Template: ComponentStory<typeof ProfileView> = () => {
  return <ProfileView did={DID} profile={PROFILE} />;
};

export const profileView = Template.bind({});
profileView.storyName = "ProfileView";
