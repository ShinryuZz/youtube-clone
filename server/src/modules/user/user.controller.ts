import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { RegisterUserBody } from "./user.schema";
import { createUesr } from "./user.service";


export async function registerUserHandler(
  req: Request<{}, {}, RegisterUserBody>,
  res: Response
){

  const {username, email, password} = req.body;

  req.body.email;

  console.log(req.body);

  try {
    await createUesr({username, email, password})

    return res.status(StatusCodes.CREATED).send("User created succeccfully")
  }catch(e){
    if(e.code === 11000){
      return res.status(StatusCodes.CONFLICT).send("User already exists");
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);

  }
}