import { Schema } from "mongoose";
import mongoose from "mongoose";
export interface IUser {
  nome: string;
  email: string;
  senha: string;
  telefones: [
    {
      numero: string;
      ddd: string;
    }
  ];
  createdAt?: string | Date;
  updateAt?: string | Date;
}

 export const userSchema = new Schema <IUser>({
  nome: {
    type: String,
  },
  email: {
    type: String,
  },
  senha: {
    type: String,
  },
  telefones: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updateAt: {
    type: Date,
    default: new Date(),
  },
}); 

export const User = mongoose.model<IUser>('User', userSchema);
