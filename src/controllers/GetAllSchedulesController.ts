import { Request, Response } from "express";
import { GetAllSchedulesService } from "../services/GetAllSchedulesService";


class GetAllSchedulesController{

    async handle(request: Request, response: Response){

        const service = new GetAllSchedulesService()

        const result = await service.execute()

        return response.status(200).json(result)
    }
}

export {GetAllSchedulesController}