import { Request, Response } from "express";
import { DeleteScheduleService } from "../services/DeleteScheduleService";


class DeleteScheduleController{

    async handle(request: Request, response: Response){
        const {id} = request.params

        const service = new DeleteScheduleService()

        const result = await service.execute(id)
        
        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(200 ).end()
    }
}

export {DeleteScheduleController}