import { getRepository } from "typeorm"
import { Procedure } from "../entities/Procedure"


class DeleteProcedureService{
    async execute(id:string){
        const repo = getRepository(Procedure)

        if(!await repo.findOne(id)){
            return new Error('Procedure does not exist')
        }

        await repo.delete(id)
    }
}

export { DeleteProcedureService }