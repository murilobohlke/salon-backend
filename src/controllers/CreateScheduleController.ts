import { Request, Response } from "express";
import { CreateScheduleService } from "../services/CreateScheduleService";


class CreateScheduleController{

    async handle(request: Request, response: Response){
        const {start_time, end_time, name, user_id, procedure_id} = request.body

        const service = new CreateScheduleService()

        const result = await service.execute({start_time, end_time, name, user_id, procedure_id})
        
        return response.json(result)
    }
}

export {CreateScheduleController}