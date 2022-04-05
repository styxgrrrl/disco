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
export const profilesListViaApi = Template.bind({});

const TemplateControlled: ComponentStory<typeof ProfilesList> = (args) => {
  const [dids, setDids] = React.useState([
    "did:3:kjzl6cwe1jw1466t7qwr0yk4jscjqhy4y7iq7z3om5hyx7dd6xc71yr751vwunw",
    "did:3:kjzl6cwe1jw1466t7qwr0yk4jscjqhy4y7iq7z3om5hyx7dd6xc71yr751vwunw",
    "did:3:kjzl6cwe1jw1466t7qwr0yk4jscjqhy4y7iq7z3om5hyx7dd6xc71yr751vwunw",
  ]);
  return (
    <>
      <Box sx={{ marginBottom: "16px" }}>
        <div>ceramic DIDs (line-break-separated):</div>
        <TextareaAutosize
          style={{ width: "640px", maxWidth: "100%" }}
          value={dids.join("\n")}
          onChange={(e) => setDids(e.target.value.split("\n").map((s) => s.trim()))}
        />
      </Box>
      {dids && <ProfilesList {...args} dids={dids.filter((did) => !!did)} />}
    </>
  );
};
export const profilesListControlled = TemplateControlled.bind({});
