import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import omit from "../../helpers/omit";
import { findUserByEmail } from "../user/user.service";
import { LoginBody } from "./auth.schema";
import { signJwt } from "./auth.utils";

export async function loginHandler(req: Request<{}, {}, LoginBody>, res: Response){
  const {email, password} = req.body

  // find the user by email
  const user = await findUserByEmail(email);

  // check user exists - return error
  if(!user || !user.comparePassword(password)){
    return res.status(StatusCodes.UNAUTHORIZED).send("Invalid email ro password");
  }

  // verify user password
  const payload = omit(user.toJSON(), ["password", "__v"]);

  // sign a jwt
  const jwt = signJwt(payload);

  // add a cookie to the response
  res.cookie("accessToken", jwt, {
    maxAge: 3.154e10, /// 1 year
    httpOnly: true,
    domain: 'localhost',
    path: '/',
    sameSite: 'strict',
    secure: false,
  })

  // respond
  return res.status(StatusCodes.OK).send(jwt);
}