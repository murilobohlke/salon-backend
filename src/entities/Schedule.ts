import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";
import { Procedure } from "./Procedure";

@Entity("schedules")
export class Schedule{

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    start_time: Date

    @Column()
    end_time: Date

    @Column()
    user_id: string

    @Column()
    procedure_id: string

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(()=>Procedure)
    @JoinColumn({name:"procedure_id"})
    procedure: Procedure

    @ManyToOne(()=>User)
    @JoinColumn({name:"user_id"})
    user: User

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}