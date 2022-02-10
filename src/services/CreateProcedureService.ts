import { getRepository } from "typeorm"
import { Procedure } from "../entities/Procedure"

type ProcedureRequest = {
    color: string,
    price: string,
    type: string,
    duration: string,
}

class CreateProcedureService{
    async execute({color, price, type, duration}:ProcedureRequest): Promise<Procedure | Error>{
        const repo = getRepository(Procedure)

        const procedure = repo.create({
            color,
            price,
            type,
            duration
        })

        await repo.save(procedure)

        return procedure
    }

}

export { CreateProcedureService }