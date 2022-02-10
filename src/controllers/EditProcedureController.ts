import { Request, Response } from "express";
import { EditProcedureService } from "../services/EditProcedureService";


class EditProcedureController{

    async handle(request: Request, response: Response){
        const {id} = request.params
        const {color, price, type, duration} = request.body

        const service = new EditProcedureService()

        const result = await service.execute({id, color, price, type, duration})
        
        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(200).json(result)
    }
}

export {EditProcedureController}