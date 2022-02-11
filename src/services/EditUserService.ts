import { getRepository } from "typeorm"
import { User } from "../entities/User"

type EditUserRequest = {
    id: string,
    email: string,
    password: string,
    image: string,
    name: string,
    phone: string
}


class EditUserService{
    async execute({id, email, password, image, name, phone}:EditUserRequest){
        const repo = getRepository(User)

        const user = await repo.findOne(id)

        if(!user){
            return new Error('User does not exist')
        }
        
        user.email = email ? email : user.email
        user.password = password ? password : user.password
        user.image = image ? image : user.image
        user.name = name ? name : user.name
        user.phone = phone ? phone : user.phone

        await repo.save(user)
    }
}

export { EditUserService }