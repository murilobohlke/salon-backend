import { Request, Response } from "express";
import { GetSchedulesService } from "../services/GetSchedulesService";


class GetSchedulesController{

    async handle(request: Request, response: Response){
        const {id} = request.params

        const service = new GetSchedulesService()

        const result = await service.execute(id)
        
        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(200).json(result)
    }
}

export {GetSchedulesController}