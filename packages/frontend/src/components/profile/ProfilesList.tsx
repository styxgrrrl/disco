import * as React from "react";
import { Box, CircularProgress } from "@mui/material";

import { ProfileView } from "./ProfileView";
import { ProfileLoader } from "./ProfileLoader";
import { ApiService } from "../../utils/ApiService";

export const ProfilesList: React.FC = (props) => {
  const [loading, setLoading] = React.useState(true);

  const api = React.useMemo(() => new ApiService(), []);
  // @NOTE: Example api usage:
  //console.log(await api.getProfileViaDid("did:3:kjzl6cwe1jw148uyox3goiyrwwe3aab8vatm3apxqisd351ww0dj6v5e3f61e8b"));
   

  async function getProfileData() {
    const ids  = await api.getAllDids(); // http://localhost:8083/v1/did/getAllDids = [] status 304
    return ids;
  }

  if(loading){
    setLoading(false);
    getProfileData().then((data)=>{
     console.log('here is the data',data);
     data.forEach((did,i)=>{
      return (
        <Box>
        <>
            {did && <ProfileLoader did={did} />}
        </>
        </Box>
       )
     })
    })
  }
//  throw new Error(
//    "@TODO: Please implement me using ApiService and ProfileView or ProfileLoader! This component should display all of the profiles one after the other.",
//  );

  if (loading) {
    return (
      <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center", padding: "50px 0", width: "100%" }}>
        <CircularProgress />
      </Box>
    );
  }
    //  I just tried one here:
    let did = "did:3:kjzl6cwe1jw1466t7qwr0yk4jscjqhy4y7iq7z3om5hyx7dd6xc71yr751vwunw";
    // let did = "did:evlevalevaleva"
     return ( 
      <Box>
      <>
          {did && <ProfileLoader did={did} />}
      </>
      </Box>
    );
    
  }