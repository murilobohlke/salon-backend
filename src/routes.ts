import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateProcedureController } from "./controllers/CreateProcedureController";
import { GetProceduresController } from "./controllers/GetProceduresController";
import { DeleteProcedureController } from "./controllers/DeleteProcedureController";
import { EditProcedureController } from "./controllers/EditProcedureController";
import { CreateScheduleController } from "./controllers/CreateScheduleController";
import { GetSchedulesController } from "./controllers/GetScheduleController";
import { GetAllSchedulesController } from "./controllers/GetAllSchedulesController";
import { DeleteScheduleController } from "./controllers/DeleteScheduleController";
import { EditUserController } from "./controllers/EditUserController";
import { EditScheduleController } from "./controllers/EditScheduleController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const routes = Router()

routes.post("/login", new AuthenticateUserController().handle)

//user
routes.post("/users", new CreateUserController().handle)
routes.put("/users/:id", ensureAuthenticated, new EditUserController().handle)

//procedure
routes.post("/procedures", ensureAuthenticated, new CreateProcedureController().handle)
routes.get("/procedures", ensureAuthenticated, new GetProceduresController().handle)
routes.delete("/procedures/:id", ensureAuthenticated, new DeleteProcedureController().handle)
routes.put("/procedures/:id", ensureAuthenticated, new EditProcedureController().handle)

//schedule
routes.post("/schedules", ensureAuthenticated, new CreateScheduleController().handle)
routes.get("/schedules/:id", ensureAuthenticated, new GetSchedulesController().handle)
routes.get("/schedules", ensureAuthenticated, new GetAllSchedulesController().handle)
routes.delete("/schedules/:id", ensureAuthenticated, new DeleteScheduleController().handle)
routes.put("/schedules/:id", ensureAuthenticated, new EditScheduleController().handle)

export{routes}