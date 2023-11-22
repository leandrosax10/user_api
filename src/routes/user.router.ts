/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, Router } from "express";
import userService from "../services/user.service";
import { authorizationMiddleware } from "../middlewares/authorization.middlewares";

const router = Router();

//listar
router.get("/",authorizationMiddleware, async (req: Request, res: Response) => {
  const user = await userService.getAll();
  res.send(user);
});

//criar
router.post("/", async (req: Request, res: Response) => {
  await userService.create(req.body);
  res.status(201).send({ message: "Usuário registrado com sucesso!" });
});

//Autenticação
router.post("/authorization", async (req: Request, res: Response) => {
  try {
    const token = await userService.authorization(
      req.body.email,
      req.body.senha
    );
    res.status(200).send({ token });
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
});

//deletar
router.delete("/remove/:document", authorizationMiddleware,async (req: Request, res: Response) => {
  const user = await userService.getByEmail(req.params.document);
  if (!user && user !== null && user !== undefined)
    return res.status(400).send({ message: "Usuário não encontrado!" });

  try {
    await userService.remove(req.params.document);
    res.status(200).send({ message: "Usuário removido com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

//alterar
router.put("/:_id", authorizationMiddleware, async (req: Request, res: Response) => {
  const user = await userService.getByEmail(req.params.document);
  if (!user && user !== null && user !== undefined)
    return res.status(400).send({ message: "Usuário não encontrado!" });

  try {
    await userService.update(req.params.document, req.body);
    res.status(200).send({ message: "Usuário alterado com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

export default router;
