import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env";

// Extend Express Request to include `user`
export interface AuthRequest extends Request {
  user?: {
    id: number;
    username: string;
    status: string;
  };
}

export const authMiddleware = (
  request: AuthRequest,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization;

  if(!authHeader || !authHeader.startsWith("Bearer ")){
    return response.status(401).json({message: "No Token Provide"});
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: number;
      username: string;
      status: string;
    };

    request.user = decoded;
    next();
  } catch (error) {
    return response.status(401).json({ message: "Token Expired or Invalid"});
  }

}