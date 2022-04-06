import { CeramicClient } from "@ceramicnetwork/http-client";
import { TileDocument } from "@ceramicnetwork/stream-tile";
import { Profile, UserData } from "../types";

const ceramic = new CeramicClient("https://ceramic-clay.3boxlabs.com");

// example DID: "did:3:kjzl6cwe1jw148uyox3goiyrwwe3aab8vatm3apxqisd351ww0dj6v5e3f61e8b"
export async function getProfileFromCeramic(did: string): Promise<Profile | undefined> {
  const doc = (await TileDocument.deterministic(ceramic, {
    controllers: [did],
    family: "userData",
  })) as { content: UserData };

  return doc.content.profile;
}
