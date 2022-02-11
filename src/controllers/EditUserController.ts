import { Request, Response } from "express";
import { EditUserService } from "../services/EditUserService";


class EditUserController{

    async handle(request: Request, response: Response){
        const {id} = request.params
        const {email, password, image, name, phone} = request.body

        const service = new EditUserService()

        const result = await service.execute({id, email, password, image, name, phone})
        
        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(200).json(result)
    }
}

export {EditUserController}