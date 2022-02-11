import { getRepository } from "typeorm"
import { Schedule } from "../entities/Schedule"

type SchueduleRequest = {
    start_time: Date,
    end_time: Date,
    name: string,
    user_id: string,
    procedure_id: string
}

class CreateScheduleService{
    async execute({start_time, end_time, name, user_id, procedure_id}:SchueduleRequest): Promise<Schedule | Error>{
        const repo = getRepository(Schedule)

        const procedure = repo.create({
            start_time, 
            end_time, 
            name, 
            user_id,
            procedure_id
        })

        await repo.save(procedure)

        return procedure
    }

}

export { CreateScheduleService }