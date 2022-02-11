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

const routes = Router()

//user
routes.post("/users", new CreateUserController().handle)
routes.put("/users/:id", new EditUserController().handle)

//procedure
routes.post("/procedures", new CreateProcedureController().handle)
routes.get("/procedures", new GetProceduresController().handle)
routes.delete("/procedures/:id", new DeleteProcedureController().handle)
routes.put("/procedures/:id", new EditProcedureController().handle)

//schedule
routes.post("/schedules", new CreateScheduleController().handle)
routes.get("/schedules/:id", new GetSchedulesController().handle)
routes.get("/schedules", new GetAllSchedulesController().handle)
routes.delete("/schedules/:id", new DeleteScheduleController().handle)
routes.put("/schedules/:id", new EditScheduleController().handle)

export{routes}