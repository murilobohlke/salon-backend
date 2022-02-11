import { getRepository } from "typeorm"
import { Schedule } from "../entities/Schedule"


class DeleteScheduleService{
    async execute(id:string){
        const repo = getRepository(Schedule)

        if(!await repo.findOne(id)){
            return new Error('Schedule does not exist')
        }

        await repo.delete(id)
    }
}

export { DeleteScheduleService }