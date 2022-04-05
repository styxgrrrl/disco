import {Maximum, MaxLength, Minimum, Property, Required} from "@tsed/schema";
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Did {

    @PrimaryGeneratedColumn()
    @Property()
    id: number;

    @Column()
    @MaxLength(100)
    @Required()
    did: string;

}