import React from "react";
import { ComponentStory } from "@storybook/react";
import { ProfileLoader } from "./ProfileLoader";
import { Profile } from "../../types";

export default {
  title: "Profiles",
  component: ProfileLoader,
};

const Template: ComponentStory<typeof ProfileLoader> = () => {
 const [did, setDid] = React.useState("did:3:kjzl6cwe1jw1466t7qwr0yk4jscjqhy4y7iq7z3om5hyx7dd6xc71yr751vwunw");
// const [did, setDid] = React.useState("did:evlevalevaleva");
  return (
    <>
      <div>
        ceramic DID: <input type="text" value={did} onChange={(e) => setDid(e.target.value)} />
        <br />
      </div>
      {did && <ProfileLoader did={did} />}
    </>
  );
};

export const profileLoader = Template.bind({});
profileLoader.storyName = "ProfileLoader";
