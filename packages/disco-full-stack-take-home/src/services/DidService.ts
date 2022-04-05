import {Injectable} from "@tsed/di";
import {TypeORMService} from "@tsed/typeorm";
import {Connection} from "typeorm";
import { DidRepository } from "../repositories/DidRepository";
import { Did } from "../entity/Did";


@Injectable()
export class DidService {
  private connection: Connection;
  

  constructor(
    private typeORMService: TypeORMService,
    public DidRepository: DidRepository,
  ) {
  
  }
  $afterRoutesInit() {
    this.connection = this.typeORMService.get("default")!; // get connection by name
  }

  async registerDid(did: string): Promise<string> {
    const newDid = new Did();
    newDid.did = did;
   console.log(`saved new Did`, newDid )
   await this.connection.manager.save(newDid);
   return did;
  }
  
  async getAllDids(): Promise<Did[]> {
    const users = await this.DidRepository.findAllDids();
    return users;
  }

}