import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";


class CreateUserController{

    async handle(request: Request, response: Response){
        const {email, password, image, name, phone} = request.body

        const service = new CreateUserService()

        const result = await service.execute({email, password, image, name, phone})

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }
        
        return response.json(result)
    }


}

export {CreateUserController}