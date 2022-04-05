import {Controller} from "@tsed/di";
import {Get, Post} from "@tsed/schema";
import { PathParams } from "@tsed/common";
import { DidService } from "src/services/DidService";
import { Did } from "../entity/Did";

@Controller("/did")
export class GetProfileController {


  constructor(private readonly DidService: DidService) {
  
  }
  @Get("/getAll")
  async getProfileByDid(): Promise<Did[]> {
   //@note: stubbed with dummy data  
   const result = [{
     id: 1,
    did: "did:3:kjzl6cwe1jw1466t7qwr0yk4jscjqhy4y7iq7z3om5hyx7dd6xc71yr751vwunw"
   }
    
  
   ]
     
    console.log(result);
    return result;

  }
  @Post("/register/:did")
  async registerDid(@PathParams("did") did: string): Promise<string> {
    
   //@note: stubbed with dummy data 
    const result =  "did:3:kjzl6cwe1jw1466t7qwr0yk4jscjqhy4y7iq7z3om5hyx7dd6xc71yr751vwunw"
    
   
    return result
  }
}
