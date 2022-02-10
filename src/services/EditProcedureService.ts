import { getRepository } from "typeorm"
import { Procedure } from "../entities/Procedure"

type EditProcedureRequest = {
    id: string,
    color: string,
    price: string,
    type: string,
    duration: string,
}


class EditProcedureService{
    async execute({id, color, price, type, duration}:EditProcedureRequest){
        const repo = getRepository(Procedure)

        const procedure = await repo.findOne(id)

        if(!procedure){
            return new Error('Procedure does not exist')
        }
        
        procedure.color = color ? color : procedure.color
        procedure.price = price ? price : procedure.price
        procedure.type = type ? type : procedure.type
        procedure.duration = duration ? duration : procedure.duration

        await repo.save(procedure)
    }
}

export { EditProcedureService }