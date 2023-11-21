import { IUser } from "../models/user.models";
import userRepository from "../repository/user.repository";

class UserService {
  getAll() {
    return userRepository.getAll();
  }
  
  getById(_id: string) {
    return userRepository.getById(_id);
  }

  create(user: IUser) {
    return userRepository.create(user);
  }

  update(_id: string, user: Partial<IUser>) {
    return userRepository.update(_id, user);
  }

  remove(_id: string) {
    return userRepository.remove(_id);
  }
}

export default new UserService();
