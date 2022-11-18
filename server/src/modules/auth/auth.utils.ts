import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'changeme'
const EXPOPIRES_IN = process.env.EXPIRES_IN || "7d"

export function signJwt(payload: string | Buffer | Object){
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: EXPOPIRES_IN,
  });
}


export function verifyJwt(token: string){
  try{
    const decodes = jwt.verify(token, JWT_SECRET);
  }catch(e){
    return null
  }
}