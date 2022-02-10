import { getRepository } from "typeorm"
import { Procedure } from "../entities/Procedure"


class GetProceduresService{
    async execute(){
        const repo = getRepository(Procedure)

        const procedures = await repo.find()

        return procedures
    }
}

export { GetProceduresService}