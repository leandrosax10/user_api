import { Request, Response, Router } from "express";
import userService from "../services/user.service";

const router = Router();

//listar
router.get("/", async (req: Request, res: Response) => {
  const user = await userService.getAll();
  res.send(user);
});

//criar
router.post("/", async (req: Request, res: Response) => {
  await userService.create(req.body);
  res.status(201).send({ message: "Usuário registrado com sucesso!" });
});

//deletar
router.delete("/remove/:document", async (req: Request, res: Response) => {
  const user = await userService.getByDocument(req.params.document);
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
router.put("/:_id", async (req: Request, res: Response) => {
  const user = await userService.getByDocument(req.params.document);
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
