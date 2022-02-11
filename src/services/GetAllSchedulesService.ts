import { getRepository } from "typeorm"
import { Schedule } from "../entities/Schedule"


class GetAllSchedulesService{
    async execute(){
        const repo = getRepository(Schedule)

        const schedules = await repo.find(
            {
                relations: ['procedure', 'user']
            }
        )

        return schedules
    }
}

export { GetAllSchedulesService }