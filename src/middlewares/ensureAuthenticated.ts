import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(request:Request, response: Response, netx: NextFunction){

    const authToken = request.headers.authorization

    if(!authToken){
        return response.status(401).end()
    }

    const [,token] = authToken.split(" ")

    try {
        const {sub} = verify(token,"e6351b1ab58fda3357fb9437060bb252")

        return netx()
    } catch (error) {
        return response.status(401).end()
    }
}