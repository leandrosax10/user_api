import Router from "express";
import usersRouter from "./user.router";

const router = Router();

router.use("/users", usersRouter);

export default router;
