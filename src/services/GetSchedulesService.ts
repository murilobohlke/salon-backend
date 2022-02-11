import { getRepository } from "typeorm"
import { Schedule } from "../entities/Schedule"


class GetSchedulesService{
    async execute(id: string){
        const repo = getRepository(Schedule)

        const schedule = await repo.find({
            where:{
                user_id:id
            },
            relations: ['procedure', 'user']
        })

        if(!schedule){ 
            return new Error('Schedule does not exist')
        }

        return schedule
    }
}

export { GetSchedulesService }