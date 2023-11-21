import { Schema } from "mongoose";
import mongoose from "mongoose";
export interface IUser {
  nome: string;
  email: string;
  senha: string;
  telefones: Telefone[];
  createdAt?: string | Date;
  updateAt?: string | Date;
}
export interface Telefone {
  numero: string;
  ddd: string;
}
export const userSchema = new Schema<IUser>({
  nome: {
    type: String,
  },
  email: {
    type: String,
  },
  senha: {
    type: String,
  },
  telefones: [{ numero: String, ddd: String }],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updateAt: {
    type: Date,
    default: new Date(),
  },
});

export const User = mongoose.model<IUser>("User", userSchema);
