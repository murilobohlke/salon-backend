import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest{
    email: string,
    password: string
}

class AuthenticateUserService{
    async execute({email, password}:IAuthenticateRequest){

        const userRepo = getRepository(User)

        const user = await userRepo.findOne({email})

        if(!user){
            //lançar erro Email/password incorrect
        }

        const passwordMatch = await compare(user.password, password)
        
        if(!passwordMatch){
             //lançar erro Email/password incorrect
        }

        const token = sign(
            {
                email: user.email
            },
            "e6351b1ab58fda3357fb9437060bb252",
            {
                subject: user.id,
                expiresIn: "2h"
            }
        )

        return token
    }
}

export { AuthenticateUserService }