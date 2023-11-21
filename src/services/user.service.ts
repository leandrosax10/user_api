import { IUser } from "../models/user.models";
import userRepository from "../repository/user.repository";
import dotenv from "dotenv";

dotenv.config();

class UserService {
  getAll() {
    return userRepository.getAll();
  }
  
  getByDocument(document: string) {
    return userRepository.getByDocument(document);
  }

  async create(user: IUser) {
    return userRepository.create(user);
  }

  update(document: string, user: Partial<IUser>) {
    return userRepository.update(document, user);
  }

  remove(document: string) {
    return userRepository.remove(document);
  }
}

export default new UserService();
