import { IUser, User } from "../models/user.models";

class UserRepository {
  getAll() {
    return User.find();
  }

  getByEmail(email: string) {
    return User.findOne({ email: email });
  }

  create(user: IUser) {
    return User.create(user);
  }
  update(document: string, user: Partial<IUser>) {
    return User.updateOne({ document: document }, { $set: user });
  }

  remove(document: string) {
    return User.deleteOne({ document: document });
  }
}
export default new UserRepository();
