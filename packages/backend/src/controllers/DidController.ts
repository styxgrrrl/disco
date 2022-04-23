import {Controller} from "@tsed/di";
import {Get, Post, Summary} from "@tsed/schema";
import { PathParams } from "@tsed/common";
import { DidService } from "../services/DidService";
import { Did } from "../entity/Did";
import { Profile } from "../types";
import { getProfileFromCeramic } from "../common/ceramic-util";

@Controller("/did")
export class GetProfileController {

  constructor(private readonly DidService: DidService) {

  }

  @Get("/getAllDids")
  @Summary("Return the DIDs of all Disco users")
  async getAllDids(): Promise<string[]> {
    const result = await this.DidService.getAllDids();
    return result.map(r => r.did);
  }

  @Post("/register/:did")
  @Summary("Register the given DID as a Disco user")
  async registerDid(@PathParams("did") did: string): Promise<boolean> {
    console.log("@TODO: Implement me using this.DidService");
    // This looks like the did is getting registered here already

    const result = this.DidService.registerDid(did);
    console.log('the result in register is ');
    console.log(result);
    return true;
  }

  @Get("/getProfileViaDid/:did")
  @Summary("Retrive the profile for a given DID")
  async getProfileViaDid(@PathParams("did") did: string): Promise<Profile | undefined> {
    // example call: http://0.0.0.0:8083/v1/did/getProfileViaDid/did:3:kjzl6cwe1jw148uyox3goiyrwwe3aab8vatm3apxqisd351ww0dj6v5e3f61e8b

    return await getProfileFromCeramic(did);
  }

  @Get("/getAllProfiles")
  @Summary("Retrive the profiles of all Disco users")
  async getAllProfiles(): Promise<Profile[]> {
    const result = await this.DidService.getAllDids();
    console.log('here are the ids');
    console.log(result); // now I have 1


    console.log("@TODO: Using stub implementation with hard-coded profile fetch. Implement me!");

    const profile = await getProfileFromCeramic("did:3:kjzl6cwe1jw148uyox3goiyrwwe3aab8vatm3apxqisd351ww0dj6v5e3f61e8b");

    // the result is all the ids
    console.log(result);
    
   // const profiles => need to get the profiles with the result here 
   // this is an array
    // const profiles = this.DidService.getLocalDiscoProfilesNow(result);


    return [profile!];
    //return [profiles];
  }

}
