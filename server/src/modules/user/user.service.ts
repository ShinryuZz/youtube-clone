import { UserModel } from "./user.model";

export async function createUesr(user){
  return UserModel.create(user);
}