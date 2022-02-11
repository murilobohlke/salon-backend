import { Request, Response } from "express";
import { EditScheduleService } from "../services/EditScheduleService";


class EditScheduleController{

    async handle(request: Request, response: Response){
        const {id} = request.params
        const {start_time, end_time, name, procedure_id} = request.body

        const service = new EditScheduleService()

        const result = await service.execute({id, start_time, end_time, name, procedure_id})
        
        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(200).json(result)
    }
}

export {EditScheduleController}