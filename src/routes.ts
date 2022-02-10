import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const routes = Router()

routes.post("/createUser", new CreateUserController().handle)

export{routes}