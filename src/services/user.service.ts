import { IUser } from "../models/user.models";
import userRepository from "../repository/user.repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretJWT = process.env.JWT_SECRET_KEY || "";

class UserService {
  getAll() {
    return userRepository.getAll();
  }

  getByEmail(email: string) {
    return userRepository.getByEmail(email);
  }

  async create(user: IUser) {
    if (user.senha) {
      user.senha = await bcrypt.hash(user.senha, 10);
    }
    return userRepository.create(user);
  }

  async authorization(email: string, senha: string) {
    const user = await userRepository.getByEmail(email);

    if (!user) throw new Error("Não encontrado");

    const result = await bcrypt.compare(senha, user.senha);
    //Chave expira em 1 hora
    if (result) {
      return jwt.sign({ email: user.email, _id: user._id }, secretJWT, {
        expiresIn: "1h",
      });
    }

    throw new Error("Sessão inválida");
  }

  update(document: string, user: Partial<IUser>) {
    return userRepository.update(document, user);
  }

  remove(document: string) {
    return userRepository.remove(document);
  }
}

export default new UserService();
