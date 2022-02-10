import { Request, Response } from "express";
import { CreateProcedureService } from "../services/CreateProcedureService";


class CreateProcedureController{

    async handle(request: Request, response: Response){
        const {color, price, type, duration} = request.body

        const service = new CreateProcedureService()

        const result = await service.execute({color, price, type, duration})

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }
        
        return response.json(result)
    }


}

export {CreateProcedureController}