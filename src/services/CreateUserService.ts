import { getRepository } from "typeorm"
import { User } from "../entities/User"
import { hash } from "bcryptjs";

type UserRequest = {
    email: string,
    password: string,
    image: string,
    name: string,
    phone: string
}

class CreateUserService{
    async execute({email, password, image, name, phone}:UserRequest): Promise<User | Error>{
        const repo = getRepository(User)

        if(await repo.findOne({email})){
            return new Error("Email already exists")
        }

        const passwordHash = await hash(password, 8)

        const user = repo.create({
            email,
            password: passwordHash,
            image,
            name,
            phone
        })

        await repo.save(user)

        return user
    }

}

export { CreateUserService }