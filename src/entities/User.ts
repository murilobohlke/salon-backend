import { Entity, Column, CreateDateColumn, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
export class User{

    @PrimaryColumn()
    id: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    image: string

    @Column()
    name: string

    @Column()
    phone: string

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}