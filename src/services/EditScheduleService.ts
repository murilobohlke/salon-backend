import { getRepository } from "typeorm"
import { Schedule } from "../entities/Schedule"

type EditScheduleRequest = {
    id: string,
    start_time: Date,
    end_time: Date,
    name: string,
    procedure_id: string
}


class EditScheduleService{
    async execute({id, start_time, end_time, name, procedure_id}:EditScheduleRequest){
        const repo = getRepository(Schedule)

        const schedule = await repo.findOne(id)

        if(!schedule){
            return new Error('Schedule does not exist')
        }
        
        schedule.start_time = start_time ? start_time : schedule.start_time
        schedule.end_time = end_time ? end_time : schedule.end_time
        schedule.name = name ? name : schedule.name
        schedule.procedure_id = procedure_id ? procedure_id : schedule.procedure_id

        await repo.save(schedule)
    }
}

export { EditScheduleService }