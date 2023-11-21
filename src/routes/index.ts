import Router from "express";
import usersRouter from "./user.router";

const router = Router();

//router.use('users');
/* router.get('/users', (_, res)=>{
return res.send('Funcionando');
}) */

router.use("/users", usersRouter);

export default router;
