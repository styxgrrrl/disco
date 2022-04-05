import { CeramicClient } from "@ceramicnetwork/http-client";
import { TileDocument } from "@ceramicnetwork/stream-tile";
const ceramic = new CeramicClient("https://ceramic-clay.3boxlabs.com");

// example DID: "did:3:kjzl6cwe1jw1466t7qwr0yk4jscjqhy4y7iq7z3om5hyx7dd6xc71yr751vwunw"
export async function getProfileViaDid(did: string): Promise<any> {
	const doc = (await TileDocument.deterministic(ceramic, {
	  controllers: [did],
	  family: "userData",
	})) as any;
	return doc.content.profile;
}