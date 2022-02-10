import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateProcedureController } from "./controllers/CreateProcedureController";
import { GetProceduresController } from "./controllers/GetProceduresController";
import { DeleteProcedureController } from "./controllers/DeleteProcedureController";
import { EditProcedureController } from "./controllers/EditProcedureController";

const routes = Router()

//user
routes.post("/createUser", new CreateUserController().handle)

//procedure
routes.post("/procedures", new CreateProcedureController().handle)
routes.get("/procedures", new GetProceduresController().handle)
routes.delete("/procedures/:id", new DeleteProcedureController().handle)
routes.put("/procedures/:id", new EditProcedureController().handle)

export{routes}