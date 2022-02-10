import { Entity, Column, CreateDateColumn, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("procedures")
export class Procedure{

    @PrimaryColumn()
    id: string

    @Column()
    color: string

    @Column()
    price: string

    @Column()
    type: string

    @Column()
    duration: string

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}