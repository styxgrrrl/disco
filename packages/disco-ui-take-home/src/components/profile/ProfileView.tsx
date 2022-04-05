import * as React from "react";
import { UserData } from "../../types";
import { CeramicContext } from "../../contexts/";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { discoLinearGradientDark } from "../../themes";
import { DidView, DiscoButton } from "../";

export const ProfileView: React.FC<{ did: string }> = ({ did }) => {
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

  return (
    <>
      <Box
        mb={3}
        sx={{
          backgroundColor: "transparent",
          backgroundImage: userData.profile?.banner ? `url(${userData.profile.banner})` : discoLinearGradientDark,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          clipPath: "ellipse(93% 100% at 50% 0%)",
          minHeight: "150px",
          width: "100%",
        }}
      />
      <Container maxWidth="lg" sx={{ margin: ["-100px 0 32px", "-150px 0 32px"], position: "relative", zIndex: 1 }}>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderRadius: "5px",
              height: ["100px", "200px"],
              marginBottom: "16px",
              overflow: "hidden",
              width: ["100px", "200px"],
            }}
          >
            {userData.profile?.avatar ? (
              <img src={userData.profile?.avatar} alt="avatar" style={{ height: "100%", width: "100%" }} />
            ) : (
              <Box
                sx={{
                  alignItems: "center",
                  backgroundColor: "#80DEEA",
                  display: "flex",
                  height: "100%",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <PersonIcon sx={{ color: "common.white", fontSize: "20px" }} />
              </Box>
            )}
          </Box>
          <Box sx={{ alignItems: "flex-start", display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Box sx={{ marginBottom: "16px" }}>
                {userData.profile?.name ? (
                  <Typography variant="h5">{userData.profile?.name}</Typography>
                ) : (
                  <DidView did={did} typographyVariant="h5" copy />
                )}
                {userData.profile?.name && <DidView did={did} copy />}
              </Box>
              <Box sx={{ maxWidth: "500px", width: "100%" }}>
                {userData.profile?.bio && <Typography variant="body2">{userData.profile?.bio}</Typography>}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};
