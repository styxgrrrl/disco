import React from "react";
import { ComponentStory } from "@storybook/react";
import { ProfileView } from "./ProfileView";

export default {
  title: "Profiles",
  component: ProfileView,
};

const Template: ComponentStory<typeof ProfileView> = (args) => {
  const [did, setDid] = React.useState("did:3:kjzl6cwe1jw1466t7qwr0yk4jscjqhy4y7iq7z3om5hyx7dd6xc71yr751vwunw");
  return (
    <>
      <div>
        ceramic DID: <input type="text" value={did} onChange={(e) => setDid(e.target.value)} />
        <br />
      </div>
      {did && <ProfileView {...args} did={did} />}
    </>
  );
};

export const profileView = Template.bind({});
