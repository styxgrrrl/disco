import * as React from "react";
import { UserData } from "../../types";
import { CeramicContext } from "../../contexts/";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { discoLinearGradientDark } from "../../themes";
import { DidView, DiscoButton } from "../";
import { ProfileView } from "./ProfileView";

export const ProfileLoader: React.FC<{ did: string }> = ({ did }) => {
  const { userDid, getUserData } = React.useContext(CeramicContext);
  const [userData, setUserData] = React.useState<UserData>({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      setUserData((await getUserData(did)) || {});
      setLoading(false);
    })();
  }, [did, getUserData]);

  if (loading) {
    return (
      <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center", padding: "50px 0", width: "100%" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!userData?.profile) {
    return (
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          padding: "50px 0",
          width: "100%",
          color: "red",
        }}
      >
        <Typography variant="body2">Error: No profile found for DID "{did}"</Typography>
      </Box>
    );
  }

  return <ProfileView did={did} profile={userData.profile} />;
};
