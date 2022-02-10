import { Request, Response } from "express";
import { GetProceduresService } from "../services/GetProceduresService";


class GetProceduresController{

    async handle(request: Request, response: Response){

        const service = new GetProceduresService()

        const result = await service.execute()
        
        return response.json(result)
    }
}

export {GetProceduresController}