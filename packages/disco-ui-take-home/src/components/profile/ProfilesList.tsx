import * as React from "react";
import { Box, CircularProgress } from "@mui/material";
import { ProfileView } from "./ProfileView";

export const ProfilesList: React.FC<{ dids?: string[] }> = ({ dids }) => {
  const [loading, setLoading] = React.useState(!dids);

  if (!dids) {
    throw new Error("API fetching for DIDs not yet implemented - please implement me!");
  }

  if (loading) {
    return (
      <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center", padding: "50px 0", width: "100%" }}>
        <CircularProgress />
      </Box>
    );
  }

  return <Box>{dids && dids.map((did) => <ProfileView did={did} />)}</Box>;
};
