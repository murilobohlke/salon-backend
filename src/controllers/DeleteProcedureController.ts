import { Request, Response } from "express";
import { DeleteProcedureService } from "../services/DeleteProcedureService";


class DeleteProcedureController{

    async handle(request: Request, response: Response){
        const {id} = request.params

        const service = new DeleteProcedureService()

        const result = await service.execute(id)
        
        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(200 ).end()
    }
}

export {DeleteProcedureController}